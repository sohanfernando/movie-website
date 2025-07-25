package com.example.moviewebsite.service;

import com.example.moviewebsite.controller.request.CreateMovieRequestDTO;
import com.example.moviewebsite.controller.response.GetMovieResponseDTO;

import java.util.List;

public interface MovieService {
    void createMovie(CreateMovieRequestDTO createMovieRequest);
    List<GetMovieResponseDTO> getAllMovies();
    GetMovieResponseDTO findMovieByName(String name);
    GetMovieResponseDTO findMovieById(Long id);
    void updateMovie(Long id, CreateMovieRequestDTO updateMovieRequest);
    void deleteMovie(Long id);
}
