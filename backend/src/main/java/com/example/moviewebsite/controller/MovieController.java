package com.example.moviewebsite.controller;

import com.example.moviewebsite.controller.request.CreateMovieRequestDTO;
import com.example.moviewebsite.controller.response.GetMovieResponseDTO;
import com.example.moviewebsite.service.impl.MovieServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174"})
@RestController
@AllArgsConstructor
@Validated
public class MovieController {
    private MovieServiceImpl movieServiceImpl;

    @PostMapping(value = "/movies")
    public ResponseEntity<String> createMovie(@Valid @RequestBody CreateMovieRequestDTO createMovieRequest) {
        movieServiceImpl.createMovie(createMovieRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body("Movie created successfully");
    }

    @GetMapping(value = "/movies")
    public ResponseEntity<List<GetMovieResponseDTO>> getAllMovies() {
        List<GetMovieResponseDTO> movies = movieServiceImpl.getAllMovies();
        return ResponseEntity.ok(movies);
    }

    @GetMapping(value = "/movies/{movie-name}")
    public ResponseEntity<GetMovieResponseDTO> getMovieByName(@PathVariable("movie-name") String name) {
        GetMovieResponseDTO movie = movieServiceImpl.findMovieByName(name);
        return ResponseEntity.ok(movie);
    }

    @GetMapping(value = "/movies/id/{movie-id}")
    public ResponseEntity<GetMovieResponseDTO> getMovieById(@PathVariable("movie-id") Long id) {
        GetMovieResponseDTO movie = movieServiceImpl.findMovieById(id);
        return ResponseEntity.ok(movie);
    }

    @PutMapping(value = "/movies/{movie-id}")
    public ResponseEntity<String> updateMovie(@PathVariable("movie-id") Long id, 
                                            @Valid @RequestBody CreateMovieRequestDTO updateMovieRequest) {
        movieServiceImpl.updateMovie(id, updateMovieRequest);
        return ResponseEntity.ok("Movie updated successfully");
    }

    @DeleteMapping(value = "/movies/{movie-id}")
    public ResponseEntity<String> deleteMovie(@PathVariable("movie-id") Long id) {
        movieServiceImpl.deleteMovie(id);
        return ResponseEntity.ok("Movie deleted successfully");
    }
}
