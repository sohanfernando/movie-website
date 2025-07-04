package com.example.moviewebsite.controller;

import com.example.moviewebsite.model.Movie;
import com.example.moviewebsite.repository.MovieRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Optional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@TestPropertySource(locations = "classpath:application.test.properties")
class MovieControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private MovieRepository movieRepository;

    @BeforeEach
    public void setUp() {
        movieRepository.deleteAll();
    }

    @Test
    @DisplayName("Add a new movie successfully")
    public void testCreateMovie() throws Exception {
        String movieJson = """
                {
                  "movieName": "Inception",
                  "director": "Christopher Nolan",
                  "movieDescription": "Dreams within dreams.",
                  "movieGenre": "Science Fiction",
                  "year": "2010",
                  "duration": "148 minutes",
                  "trailerLink": "https://www.youtube.com/watch?v=YoHD9XEInc0",
                  "movieCover": "https://example.com/inception.jpg"
                }
                """;

        mockMvc.perform(post("/movies")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(movieJson))
                .andExpect(status().isOk());

        Optional<Movie> movie = movieRepository.findByMovieName("Inception");
        assert (movie.isPresent());
    }

    @Test
    @DisplayName("Fetch all movies")
    public void testGetAllMovies() throws Exception {
        Movie movie = new Movie(null, "Matrix", "Wachowskis", "A hacker awakens", "Science Fiction", "1999", "136 minutes", "https://www.youtube.com/watch?v=vKQi3bBA1y8", "https://example.com/matrix.jpg");
        movieRepository.save(movie);

        mockMvc.perform(get("/movies"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(1))
                .andExpect(jsonPath("$[0].movieName").value("Matrix"));
    }

    @Test
    @DisplayName("Fetch a movie by name")
    public void testGetMovieByName() throws Exception {
        Movie movie = new Movie(null, "Interstellar", "Christopher Nolan", "Space-time voyage", "Science Fiction", "2014", "169 minutes", "https://www.youtube.com/watch?v=zSWdZVtXT7E", "https://example.com/interstellar.jpg");
        movieRepository.save(movie);

        mockMvc.perform(get("/movies/{movie-name}", "Interstellar"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.director").value("Christopher Nolan"))
                .andExpect(jsonPath("$.duration").value("169 minutes"));
    }

    @Test
    @DisplayName("Delete a movie by ID")
    public void testDeleteMovie() throws Exception {
        Movie movie = new Movie(null, "The Prestige", "Christopher Nolan", "Magicians and rivalry", "Drama", "2006", "130 minutes", "https://www.youtube.com/watch?v=RLtaA9fFNXU", "https://example.com/prestige.jpg");
        movie = movieRepository.save(movie);

        mockMvc.perform(delete("/movies/{movie-id}", movie.getId()))
                .andExpect(status().isOk());

        Optional<Movie> deleted = movieRepository.findById(movie.getId());
        assert (deleted.isEmpty());
    }
}
