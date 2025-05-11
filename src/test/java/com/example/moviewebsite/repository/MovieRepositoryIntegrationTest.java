package com.example.moviewebsite.repository;

import com.example.moviewebsite.model.Movie;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@TestPropertySource(locations = "classpath:application.test.properties")
public class MovieRepositoryIntegrationTest {

    @Autowired
    private MovieRepository movieRepository;

    private Movie inception;
    private Movie interstellar;

    @BeforeEach
    void setUp() {
        movieRepository.deleteAll();

        inception = new Movie();
        inception.setMovieName("Inception");
        inception.setDirector("Christopher Nolan");
        inception.setMovieDescription("Dreams within dreams.");
        inception.setMovieGenre("Science Fiction");
        inception.setYear("2010");
        inception.setDuration("148 minutes");

        interstellar = new Movie();
        interstellar.setMovieName("Interstellar");
        interstellar.setDirector("Christopher Nolan");
        interstellar.setMovieDescription("A team travels through a wormhole in space.");
        interstellar.setMovieGenre("Science Fiction");
        interstellar.setYear("2014");
        interstellar.setDuration("169 minutes");

        movieRepository.save(inception);
        movieRepository.save(interstellar);
    }

    @Test
    void testFindMovieByName() {
        Optional<Movie> found = movieRepository.findByMovieName("Inception");

        assertTrue(found.isPresent());
        assertEquals("Inception", found.get().getMovieName());
    }

    @Test
    void testFindByNonExistingMovieName() {
        Optional<Movie> found = movieRepository.findByMovieName("Nonexistent");

        assertTrue(found.isEmpty());
    }

    @Test
    void testFindAllMovies() {
        List<Movie> all = movieRepository.findAll();

        assertEquals(2, all.size());
    }

    @Test
    void testDeleteMovieById() {
        Long id = inception.getId();
        movieRepository.deleteById(id);

        assertFalse(movieRepository.findById(id).isPresent());
    }

    @Test
    void testSaveMovie() {
        Movie newMovie = new Movie();
        newMovie.setMovieName("Tenet");
        newMovie.setDirector("Christopher Nolan");
        newMovie.setMovieDescription("Time inversion.");
        newMovie.setMovieGenre("Action");
        newMovie.setYear("2020");
        newMovie.setDuration("150 minutes");

        Movie saved = movieRepository.save(newMovie);

        assertNotNull(saved.getId());
        assertEquals("Tenet", saved.getMovieName());
    }
}
