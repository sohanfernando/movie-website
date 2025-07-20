package com.example.moviewebsite.controller.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.validation.constraints.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CreateMovieRequestDTO {
    
    @NotBlank(message = "Movie name is required")
    @Size(min = 1, max = 100, message = "Movie name must be between 1 and 100 characters")
    private String movieName;
    
    @NotBlank(message = "Director name is required")
    @Size(min = 1, max = 100, message = "Director name must be between 1 and 100 characters")
    private String director;
    
    @NotBlank(message = "Movie description is required")
    @Size(min = 10, max = 1000, message = "Movie description must be between 10 and 1000 characters")
    private String movieDescription;
    
    @NotBlank(message = "Movie genre is required")
    @Size(min = 1, max = 50, message = "Movie genre must be between 1 and 50 characters")
    private String movieGenre;
    
    @NotBlank(message = "Year is required")
    @Pattern(regexp = "^(19|20)\\d{2}$", message = "Year must be a valid 4-digit year between 1900-2099")
    private String year;
    
    @NotBlank(message = "Duration is required")
    @Pattern(regexp = "^\\d{1,3}\\s?(min|mins|minutes?)$", message = "Duration must be in format like '120 min' or '90 minutes'")
    private String duration;
    
    @NotBlank(message = "Trailer link is required")
    @Pattern(regexp = "^https?://.+", message = "Trailer link must be a valid URL starting with http:// or https://")
    private String trailerLink;
    
    @NotBlank(message = "Movie cover is required")
    private String movieCover;
}
