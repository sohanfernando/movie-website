package com.example.moviewebsite.repository;

import com.example.moviewebsite.model.User;
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
public class UserRepositoryIntegrationTest {
    @Autowired
    private UserRepository userRepository;

    private User user1;
    private User user2;

    @BeforeEach
    void setUp() {
        userRepository.deleteAll();

        user1 = new User();
        user1.setName("Alice");
        user1.setEmail("alice@example.com");
        user1.setPassword("password1");

        user2 = new User();
        user2.setName("Bob");
        user2.setEmail("bob@example.com");
        user2.setPassword("password2");

        userRepository.save(user1);
        userRepository.save(user2);
    }

    @Test
    void testFindById() {
        Optional<User> found = userRepository.findById(user1.getId());
        assertTrue(found.isPresent());
        assertEquals("Alice", found.get().getName());
    }

    @Test
    void testFindAll() {
        List<User> users = userRepository.findAll();
        assertEquals(2, users.size());
    }

    @Test
    void testSave() {
        User user = new User();
        user.setName("Charlie");
        user.setEmail("charlie@example.com");
        user.setPassword("password3");

        User savedUser = userRepository.save(user);
        assertNotNull(savedUser.getId());
        assertEquals("Charlie", savedUser.getName());
    }

    @Test
    void testDeleteById() {
        Long idToDelete = user1.getId();
        userRepository.deleteById(idToDelete);
        assertFalse(userRepository.findById(idToDelete).isPresent());
    }
}
