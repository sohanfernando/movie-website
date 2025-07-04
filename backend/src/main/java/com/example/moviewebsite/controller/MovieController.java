package com.example.moviewebsite.controller;

import com.example.moviewebsite.controller.request.CreateMovieRequestDTO;
import com.example.moviewebsite.controller.response.GetMovieResponseDTO;
import com.example.moviewebsite.service.impl.MovieServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@AllArgsConstructor
public class MovieController {
    private MovieServiceImpl movieServiceImpl;

    @PostMapping(value = "/movies")
    public void createMovie(@RequestBody CreateMovieRequestDTO createMovieRequest) {
        movieServiceImpl.createMovie(createMovieRequest);
    }

    @GetMapping(value = "/movies")
    public List<GetMovieResponseDTO> getAllMovies() {
        return movieServiceImpl.getAllMovies();
    }

    @GetMapping(value = "/movies/{movie-name}")
    public GetMovieResponseDTO getMovieByName(@PathVariable("movie-name") String name) {
        return movieServiceImpl.findMovieByName(name);
    }

    @DeleteMapping(value = "/movies/{movie-id}")
    public void deleteMovie(@PathVariable("movie-id") Long id) {
        movieServiceImpl.deleteMovie(id);
    }
}
