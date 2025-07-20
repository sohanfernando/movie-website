package com.example.moviewebsite.controller;

import com.example.moviewebsite.exception.InvalidFileTypeException;
import com.example.moviewebsite.exception.FileSizeExceededException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Map;
import java.util.Set;
import java.util.UUID;

@RestController
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174"})
public class FileUploadController {

    // Allowed file types
    private static final Set<String> ALLOWED_CONTENT_TYPES = Set.of(
        "image/jpeg", 
        "image/jpg", 
        "image/png", 
        "image/gif", 
        "image/webp"
    );
    
    // Allowed file extensions
    private static final Set<String> ALLOWED_EXTENSIONS = Set.of(
        ".jpg", ".jpeg", ".png", ".gif", ".webp"
    );
    
    // Maximum file size: 5MB
    private static final long MAX_FILE_SIZE = 5 * 1024 * 1024;

    @PostMapping("/upload")
    public ResponseEntity<Map<String, String>> upload(@RequestParam("file") MultipartFile file) throws IOException {
        
        // Validate file is not empty
        if (file.isEmpty()) {
            throw new InvalidFileTypeException("File cannot be empty");
        }
        
        // Validate file size
        if (file.getSize() > MAX_FILE_SIZE) {
            throw new FileSizeExceededException("File size exceeds maximum limit of 5MB");
        }
        
        // Validate content type
        String contentType = file.getContentType();
        if (contentType == null || !ALLOWED_CONTENT_TYPES.contains(contentType.toLowerCase())) {
            throw new InvalidFileTypeException("Only image files (JPEG, PNG, GIF, WebP) are allowed");
        }
        
        // Validate file extension
        String originalFilename = file.getOriginalFilename();
        if (originalFilename == null) {
            throw new InvalidFileTypeException("Invalid filename");
        }
        
        String fileExtension = getFileExtension(originalFilename).toLowerCase();
        if (!ALLOWED_EXTENSIONS.contains(fileExtension)) {
            throw new InvalidFileTypeException("File extension not allowed");
        }
        
        // Sanitize filename and create unique name
        String sanitizedFilename = sanitizeFilename(originalFilename);
        String fileName = UUID.randomUUID() + "-" + sanitizedFilename;
        
        // Create upload directory if it doesn't exist
        Path uploadDir = Paths.get("uploads");
        if (!Files.exists(uploadDir)) {
            Files.createDirectories(uploadDir);
        }
        
        // Save file
        Path filePath = uploadDir.resolve(fileName);
        Files.write(filePath, file.getBytes());
        
        // Return the URL to access the image
        String imageUrl = "http://localhost:8080/uploads/" + fileName;
        
        return ResponseEntity.ok(Map.of(
            "url", imageUrl,
            "filename", fileName,
            "size", String.valueOf(file.getSize()),
            "contentType", contentType
        ));
    }
    
    private String getFileExtension(String filename) {
        int lastDotIndex = filename.lastIndexOf('.');
        return lastDotIndex == -1 ? "" : filename.substring(lastDotIndex);
    }
    
    private String sanitizeFilename(String filename) {
        // Remove any path traversal attempts and special characters
        return filename.replaceAll("[^a-zA-Z0-9.-]", "_")
                      .replaceAll("\\.\\.+", ".")
                      .replaceAll("^\\.", "")
                      .trim();
    }
}
