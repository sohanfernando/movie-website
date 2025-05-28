package com.example.moviewebsite.service;

import com.example.moviewebsite.controller.request.CreateUserRequestDTO;
import com.example.moviewebsite.controller.request.LoginUserRequestDTO;
import com.example.moviewebsite.controller.response.GetUserResponseDTO;

import java.util.List;

public interface UserService {
    GetUserResponseDTO register(CreateUserRequestDTO createUserRequest);
    GetUserResponseDTO login(LoginUserRequestDTO loginUserRequestDTO);
    List<GetUserResponseDTO> getAllUsers();
    GetUserResponseDTO findUserById(Long id);
    void deleteUser(Long id);
}
