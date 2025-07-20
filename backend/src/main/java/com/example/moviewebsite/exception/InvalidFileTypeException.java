package com.example.moviewebsite.exception;

public class InvalidFileTypeException extends RuntimeException {
    public InvalidFileTypeException(String message) {
        super(message);
    }
    
    public InvalidFileTypeException(String message, Throwable cause) {
        super(message, cause);
    }
}