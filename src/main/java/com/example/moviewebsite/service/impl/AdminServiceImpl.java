package com.example.moviewebsite.service.impl;

import com.example.moviewebsite.controller.request.CreateAdminRequestDTO;
import com.example.moviewebsite.controller.request.LoginAdminRequestDTO;
import com.example.moviewebsite.controller.response.GetAdminResponseDTO;
import com.example.moviewebsite.model.Admin;
import com.example.moviewebsite.repository.AdminRepository;
import com.example.moviewebsite.service.AdminService;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class AdminServiceImpl implements AdminService {
    private AdminRepository adminRepository;
    private PasswordEncoder passwordEncoder;

    @Override
    public GetAdminResponseDTO createAdmin(CreateAdminRequestDTO createAdminRequestDTO) {
        Admin admin = new Admin();

        admin.setName(createAdminRequestDTO.getName());
        admin.setEmail(createAdminRequestDTO.getEmail());
        admin.setPassword(passwordEncoder.encode(createAdminRequestDTO.getPassword()));

        adminRepository.save(admin);

        return new GetAdminResponseDTO(
                admin.getId(),
                admin.getName(),
                admin.getEmail()
        );
    }

    @Override
    public GetAdminResponseDTO adminLogin(LoginAdminRequestDTO loginAdminRequestDTO) {
        Optional<Admin> admin = adminRepository.findByEmail(loginAdminRequestDTO.getEmail());

        if (admin.isPresent()) {
            Admin foundAdmin = admin.get();
            if (passwordEncoder.matches(loginAdminRequestDTO.getPassword(), foundAdmin.getPassword())) {
                return new GetAdminResponseDTO(
                        foundAdmin.getId(),
                        foundAdmin.getName(),
                        foundAdmin.getEmail()
                );
            } else {
                throw new RuntimeException("Invalid email or password.");
            }
        } else {
            throw new RuntimeException("Invalid email or password.");
        }
    }

}