package com.example.moviewebsite.controller;

import com.example.moviewebsite.controller.request.CreateUserRequestDTO;
import com.example.moviewebsite.controller.request.LoginUserRequestDTO;
import com.example.moviewebsite.controller.response.GetUserResponseDTO;
import com.example.moviewebsite.service.impl.UserServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174"}, allowCredentials = "true")
@AllArgsConstructor
@RestController
public class UserController {
    private UserServiceImpl userServiceImpl;

    // Endpoint to user registration
    @PostMapping(value = "/users/signup")
    public void signup(@RequestBody CreateUserRequestDTO createUserRequest) {
        userServiceImpl.register(createUserRequest);
    }

    @PostMapping(value = "/users/login")
    public ResponseEntity<?> login(@RequestBody LoginUserRequestDTO loginUserRequestDTO) {
        try {
            GetUserResponseDTO userResponseDTO = userServiceImpl.login(loginUserRequestDTO);
            return ResponseEntity.status(HttpStatus.OK).body(userResponseDTO);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }

    // Endpoint to get all users
    @GetMapping(value = "/users")
    public List<GetUserResponseDTO> getAllUsers() {
        return userServiceImpl.getAllUsers();
    }

    // Endpoint to get a user by ID
    @GetMapping(value = "/users/{user-id}")
    public GetUserResponseDTO getUserById(@PathVariable("user-id") Long id) {
        return userServiceImpl.findUserById(id);
    }

    // Endpoint to delete a user by ID
    @DeleteMapping(value = "/users/{user-id}")
    public void deleteUser(@PathVariable("user-id") Long id) {
        userServiceImpl.deleteUser(id);
    }
}
