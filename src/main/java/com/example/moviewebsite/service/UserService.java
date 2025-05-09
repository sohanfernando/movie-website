package com.example.moviewebsite.service;

import com.example.moviewebsite.controller.request.CreateUserRequestDTO;
import com.example.moviewebsite.controller.response.GetUserResponseDTO;

import java.util.List;

public interface UserService {
    void saveUser(CreateUserRequestDTO createUserRequest);
    List<GetUserResponseDTO> getAllUsers();
    GetUserResponseDTO findUserById(Long id);
    void deleteUser(Long id);
}
