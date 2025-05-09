package com.example.moviewebsite.service.impl;

import com.example.moviewebsite.controller.request.CreateMovieRequestDTO;
import com.example.moviewebsite.controller.response.GetMovieResponseDTO;
import com.example.moviewebsite.model.Movie;
import com.example.moviewebsite.repository.MovieRepository;
import com.example.moviewebsite.service.MovieService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MovieServiceImpl implements MovieService {
    private MovieRepository movieRepository;

    @Override
    public void createMovie(CreateMovieRequestDTO createMovieRequest) {
        Movie movie = new Movie();
        movie.setMovieName(createMovieRequest.getMovieName());
        movie.setDirector(createMovieRequest.getDirector());
        movie.setMovieDescription(createMovieRequest.getMovieDescription());
        movie.setMovieGenre(createMovieRequest.getMovieGenre());
        movie.setYear(createMovieRequest.getYear());
        movie.setDuration(createMovieRequest.getDuration());

        movieRepository.save(movie);
    }

    @Override
    public List<GetMovieResponseDTO> getAllMovies() {
        return movieRepository.findAll().stream()
                .map(movie -> new GetMovieResponseDTO(
                        movie.getId(),
                        movie.getMovieName(),
                        movie.getDirector(),
                        movie.getMovieDescription(),
                        movie.getMovieGenre(),
                        movie.getYear(),
                        movie.getDuration()))
                .collect(Collectors.toList());
    }

    @Override
    public GetMovieResponseDTO findMovieByName(String name) {
        Movie movie = movieRepository.findByMovieName(name)
                .orElseThrow(() -> new RuntimeException("Movie not found"));

        return new GetMovieResponseDTO(
                movie.getId(),
                movie.getMovieName(),
                movie.getDirector(),
                movie.getMovieDescription(),
                movie.getMovieGenre(),
                movie.getYear(),
                movie.getDuration());
    }

    @Override
    public void deleteMovie(Long id) {
        Movie movie = movieRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Movie not found"));

        movieRepository.delete(movie);
    }

}
