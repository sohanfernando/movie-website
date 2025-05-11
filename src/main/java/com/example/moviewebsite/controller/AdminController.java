package com.example.moviewebsite.controller;

import com.example.moviewebsite.controller.request.CreateAdminRequestDTO;
import com.example.moviewebsite.service.impl.AdminServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class AdminController {
    private AdminServiceImpl adminServiceImpl;

    @PostMapping(value = "/admins")
    public void createAdmin(@RequestBody CreateAdminRequestDTO createAdminRequest){
        adminServiceImpl.createAdmin(createAdminRequest);
    }
}
