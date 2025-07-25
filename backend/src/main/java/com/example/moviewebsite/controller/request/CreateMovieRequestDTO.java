package com.example.moviewebsite.controller.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.validation.constraints.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CreateMovieRequestDTO {
    @NotBlank(message = "Movie name cannot be blank")
    @Size(min = 1, max = 100, message = "Movie name cannot exceed 100 characters")
    private String movieName;

    @NotBlank(message = "Director name cannot be blank")
    @Size(min = 1, max = 50, message = "Director name cannot exceed 50 characters")
    private String director;

    @NotBlank(message = "Movie description cannot be blank")
    @Size(min = 1, max = 500, message = "Movie description cannot exceed 500 characters")
    private String movieDescription;

    @NotBlank(message = "Movie genre cannot be blank")
    @Size(min = 1, max = 30, message = "Movie genre cannot exceed 30 characters")
    private String movieGenre;

    @NotBlank(message = "Year cannot be blank")
    @Pattern(regexp = "^(19|20)\\d{2}$", message = "Year must be a valid year in the format YYYY")
    private String year;

    @NotBlank(message = "Duration cannot be blank")
    @Pattern(regexp = "^\\d{1,3} min$", message = "Duration must be in the format 'X min' where X is a number")
    private String duration;

    @NotBlank(message = "Trailer link cannot be blank")
    @Pattern(regexp = "^https?://.+", message = "Trailer link must be a valid URL starting with http:// or https://")
    private String trailerLink;

    @NotBlank(message = "Movie cover is required")
    private String movieCover;
}
