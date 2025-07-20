package com.example.moviewebsite.controller;

import com.example.moviewebsite.controller.request.CreateUserRequestDTO;
import com.example.moviewebsite.controller.request.LoginUserRequestDTO;
import com.example.moviewebsite.controller.response.GetUserResponseDTO;
import com.example.moviewebsite.service.impl.UserServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174"}, allowCredentials = "true")
@AllArgsConstructor
@RestController
@Validated
public class UserController {
    private UserServiceImpl userServiceImpl;

    // Endpoint to user registration
    @PostMapping(value = "/users/signup")
    public ResponseEntity<GetUserResponseDTO> signup(@Valid @RequestBody CreateUserRequestDTO createUserRequest) {
        GetUserResponseDTO userResponse = userServiceImpl.register(createUserRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(userResponse);
    }

    @PostMapping(value = "/users/login")
    public ResponseEntity<GetUserResponseDTO> login(@Valid @RequestBody LoginUserRequestDTO loginUserRequestDTO) {
        GetUserResponseDTO userResponseDTO = userServiceImpl.login(loginUserRequestDTO);
        return ResponseEntity.ok(userResponseDTO);
    }

    // Endpoint to get all users
    @GetMapping(value = "/users")
    public ResponseEntity<List<GetUserResponseDTO>> getAllUsers() {
        List<GetUserResponseDTO> users = userServiceImpl.getAllUsers();
        return ResponseEntity.ok(users);
    }

    // Endpoint to get a user by ID
    @GetMapping(value = "/users/{user-id}")
    public ResponseEntity<GetUserResponseDTO> getUserById(@PathVariable("user-id") Long id) {
        GetUserResponseDTO user = userServiceImpl.findUserById(id);
        return ResponseEntity.ok(user);
    }

    // Endpoint to delete a user by ID
    @DeleteMapping(value = "/users/{user-id}")
    public ResponseEntity<String> deleteUser(@PathVariable("user-id") Long id) {
        userServiceImpl.deleteUser(id);
        return ResponseEntity.ok("User deleted successfully");
    }
}
