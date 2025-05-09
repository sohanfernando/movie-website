package com.example.moviewebsite.controller;

import com.example.moviewebsite.controller.request.CreateUserRequestDTO;
import com.example.moviewebsite.controller.response.GetUserResponseDTO;
import com.example.moviewebsite.service.impl.UserServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
public class UserController {
    private UserServiceImpl userServiceImpl;

    // Endpoint to create a new user
    @PostMapping(value = "/users")
    public void createUser(@RequestBody CreateUserRequestDTO createUserRequest) {
        userServiceImpl.saveUser(createUserRequest);
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
