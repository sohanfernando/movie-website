package com.example.moviewebsite.service;

import com.example.moviewebsite.controller.request.CreateAdminRequestDTO;
import com.example.moviewebsite.controller.request.LoginAdminRequestDTO;
import com.example.moviewebsite.controller.response.GetAdminResponseDTO;

public interface AdminService {
    GetAdminResponseDTO createAdmin(CreateAdminRequestDTO createAdminRequestDTO);
    GetAdminResponseDTO adminLogin(LoginAdminRequestDTO loginAdminRequestDTO);
}
