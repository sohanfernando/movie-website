package com.example.moviewebsite.controller;

import com.example.moviewebsite.model.User;
import com.example.moviewebsite.repository.UserRepository;
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

import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@TestPropertySource(locations = "classpath:application.test.properties")
class UserControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private UserRepository userRepository;

    private Long savedUserId;

    @BeforeEach
    public void setUp() {
        userRepository.deleteAll();

        User user = new User();
        user.setName("John Doe");
        user.setEmail("john@example.com");
        user.setPassword("password123");

        user = userRepository.save(user);
        savedUserId = user.getId();
    }

    @Test
    @DisplayName("Create a new user successfully")
    public void testCreateUser() throws Exception {
        String userJson = """
                {
                  "name": "Alice",
                  "email": "alice@example.com",
                  "password": "secret"
                }
                """;

        mockMvc.perform(post("/users")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(userJson))
                .andExpect(status().isOk());

        Optional<User> saved = userRepository.findById(savedUserId);
        assert(saved.isPresent());
    }

    @Test
    @DisplayName("Get all users")
    public void testGetAllUsers() throws Exception {
        mockMvc.perform(get("/users"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()", greaterThanOrEqualTo(1)))
                .andExpect(jsonPath("$[0].email", is("john@example.com")));
    }

    @Test
    @DisplayName("Get user by ID")
    public void testGetUserById() throws Exception {
        mockMvc.perform(get("/users/{user-id}", savedUserId))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("John Doe"))
                .andExpect(jsonPath("$.email").value("john@example.com"));
    }

    @Test
    @DisplayName("Delete user by ID")
    public void testDeleteUserById() throws Exception {
        mockMvc.perform(delete("/users/{user-id}", savedUserId))
                .andExpect(status().isOk());

        Optional<User> deleted = userRepository.findById(savedUserId);
        assert(deleted.isEmpty());
    }
}
