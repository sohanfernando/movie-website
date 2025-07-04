package com.example.moviewebsite.controller.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CreateMovieRequestDTO {
    private String movieName;
    private String director;
    private String movieDescription;
    private String movieGenre;
    private String year;
    private String duration;
    private String trailerLink;
    private String movieCover;
}
