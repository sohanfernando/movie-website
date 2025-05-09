package com.example.moviewebsite.controller.request;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CreateUserRequestDTO {
    private String name;
    private String email;
    private String password;
}
