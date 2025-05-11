package com.example.moviewebsite.service.impl;

import com.example.moviewebsite.controller.request.CreateAdminRequestDTO;
import com.example.moviewebsite.model.Admin;
import com.example.moviewebsite.repository.AdminRepository;
import com.example.moviewebsite.service.AdminService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AdminServiceImpl implements AdminService {
    private AdminRepository adminRepository;

    @Override
    public void createAdmin(CreateAdminRequestDTO createAdminRequestDTO){
        Admin admin = new Admin();
        admin.setName(createAdminRequestDTO.getName());
        admin.setEmail(createAdminRequestDTO.getEmail());
        admin.setPassword(createAdminRequestDTO.getPassword());

        adminRepository.save(admin);
    }
}
