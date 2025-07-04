package com.example.moviewebsite.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Map;
import java.util.UUID;

@RestController
public class FileUploadController {

    @PostMapping("/upload")
    public ResponseEntity<Map<String, String>> upload(@RequestParam("file") MultipartFile file) throws IOException {
        // For demo: Save to local static folder (src/main/resources/static/uploads/)
        String fileName = UUID.randomUUID() + "-" + file.getOriginalFilename();
        Path path = Paths.get("src/main/resources/static/uploads/" + fileName);
        Files.createDirectories(path.getParent());
        Files.write(path, file.getBytes());

        // URL to access the image (you may change this for cloud hosting)
        String imageUrl = "http://localhost:8080/uploads/" + fileName;

        return ResponseEntity.ok(Map.of("url", imageUrl));
    }
}
