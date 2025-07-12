package com.example.moviewebsite.controller;

import com.example.moviewebsite.controller.request.CreateAdminRequestDTO;
import com.example.moviewebsite.controller.request.LoginAdminRequestDTO;
import com.example.moviewebsite.controller.response.GetAdminResponseDTO;
import com.example.moviewebsite.service.impl.AdminServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class AdminController {
    private AdminServiceImpl adminServiceImpl;

    @PostMapping(value = "/admins/admin-signup")
    public void adminSignUp(@RequestBody CreateAdminRequestDTO createAdminRequest){
        adminServiceImpl.createAdmin(createAdminRequest);
    }

    @CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174"}, allowCredentials = "true")
    @PostMapping(value = "/admins/admin-login")
    public ResponseEntity<?> adminLogin(@RequestBody LoginAdminRequestDTO loginAdminRequestDTO){
        try {
            GetAdminResponseDTO adminResponseDTO = adminServiceImpl.adminLogin(loginAdminRequestDTO);
            return ResponseEntity.status(HttpStatus.OK).body(adminResponseDTO);
        }catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }
}
