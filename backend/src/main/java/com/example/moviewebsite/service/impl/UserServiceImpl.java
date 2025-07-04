package com.example.moviewebsite.service.impl;

import com.example.moviewebsite.controller.request.CreateUserRequestDTO;
import com.example.moviewebsite.controller.request.LoginUserRequestDTO;
import com.example.moviewebsite.controller.response.GetUserResponseDTO;
import com.example.moviewebsite.model.User;
import com.example.moviewebsite.repository.UserRepository;
import com.example.moviewebsite.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    @Override
    public GetUserResponseDTO register(CreateUserRequestDTO createUserRequest){
        User user = new User();

        user.setName(createUserRequest.getName());
        user.setEmail(createUserRequest.getEmail());
        user.setPassword(passwordEncoder.encode(createUserRequest.getPassword()));

        userRepository.save(user);

        return new GetUserResponseDTO(
                user.getId(),
                user.getName(),
                user.getEmail()
        );
    }

    @Override
    public GetUserResponseDTO login(LoginUserRequestDTO loginUserRequestDTO) {
        Optional<User> user = userRepository.findByEmail(loginUserRequestDTO.getEmail());

        if (user.isPresent()) {
            User foundUser = user.get();
            if (passwordEncoder.matches(loginUserRequestDTO.getPassword(), foundUser.getPassword())) {
                return new GetUserResponseDTO(
                        foundUser.getId(),
                        foundUser.getName(),
                        foundUser.getEmail()
                );
            } else {
                throw new RuntimeException("Invalid email or password.");
            }
        } else {
            throw new RuntimeException("Invalid email or password.");
        }
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
