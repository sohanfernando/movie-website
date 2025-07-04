package com.example.moviewebsite.controller.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class GetMovieResponseDTO {
    private Long id;
    private String movieName;
    private String director;
    private String movieDescription;
    private String movieGenre;
    private String year;
    private String duration;
    private String trailerLink;
    private String movieCover;
}
