package com.example.moviewebsite.exception;

public class FileSizeExceededException extends RuntimeException {
    public FileSizeExceededException(String message) {
        super(message);
    }
    
    public FileSizeExceededException(String message, Throwable cause) {
        super(message, cause);
    }
}