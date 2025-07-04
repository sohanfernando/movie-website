package com.example.moviewebsite.controller.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class GetUserResponseDTO {
    private Long id;
    private String name;
    private String email;
}
