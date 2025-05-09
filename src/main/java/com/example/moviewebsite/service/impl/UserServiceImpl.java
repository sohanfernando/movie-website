package com.example.moviewebsite.service.impl;

import com.example.moviewebsite.controller.request.CreateUserRequestDTO;
import com.example.moviewebsite.controller.response.GetUserResponseDTO;
import com.example.moviewebsite.model.User;
import com.example.moviewebsite.repository.UserRepository;
import com.example.moviewebsite.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Override
    public void saveUser(CreateUserRequestDTO createUserRequest){
        User user = new User();

        user.setName(createUserRequest.getName());
        user.setEmail(createUserRequest.getEmail());
        user.setPassword(createUserRequest.getPassword());

        userRepository.save(user);
    }

    @Override
    public List<GetUserResponseDTO> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream().map(user -> {
            GetUserResponseDTO userResponse = new GetUserResponseDTO();
            userResponse.setId(user.getId());
            userResponse.setName(user.getName());
            userResponse.setEmail(user.getEmail());
            return userResponse;
        }).toList();
    }

    @Override
    public GetUserResponseDTO findUserById(Long id) {
        User user = userRepository.findById((id))
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));

        return new GetUserResponseDTO(
                user.getId(),
                user.getName(),
                user.getEmail()
        );

    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
