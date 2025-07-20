package com.example.moviewebsite.service.impl;

import com.example.moviewebsite.controller.request.CreateUserRequestDTO;
import com.example.moviewebsite.controller.request.LoginUserRequestDTO;
import com.example.moviewebsite.controller.response.GetUserResponseDTO;
import com.example.moviewebsite.exception.InvalidCredentialsException;
import com.example.moviewebsite.exception.UserNotFoundException;
import com.example.moviewebsite.model.User;
import com.example.moviewebsite.repository.UserRepository;
import com.example.moviewebsite.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    @Override
    public GetUserResponseDTO register(CreateUserRequestDTO createUserRequest) {
        // Check if user already exists
        if (userRepository.findByEmail(createUserRequest.getEmail()).isPresent()) {
            throw new IllegalArgumentException("User with this email already exists");
        }
        
        User user = new User();
        user.setName(createUserRequest.getName());
        user.setEmail(createUserRequest.getEmail());
        user.setPassword(passwordEncoder.encode(createUserRequest.getPassword()));

        User savedUser = userRepository.save(user);

        return new GetUserResponseDTO(
                savedUser.getId(),
                savedUser.getName(),
                savedUser.getEmail()
        );
    }

    @Override
    public GetUserResponseDTO login(LoginUserRequestDTO loginUserRequestDTO) {
        Optional<User> userOptional = userRepository.findByEmail(loginUserRequestDTO.getEmail());

        if (userOptional.isEmpty()) {
            throw new InvalidCredentialsException("Invalid email or password");
        }
        
        User foundUser = userOptional.get();
        if (!passwordEncoder.matches(loginUserRequestDTO.getPassword(), foundUser.getPassword())) {
            throw new InvalidCredentialsException("Invalid email or password");
        }
        
        return new GetUserResponseDTO(
                foundUser.getId(),
                foundUser.getName(),
                foundUser.getEmail()
        );
    }

    @Override
    public List<GetUserResponseDTO> getAllUsers() {
        return userRepository.findAll().stream()
                .map(user -> new GetUserResponseDTO(
                        user.getId(),
                        user.getName(),
                        user.getEmail()))
                .collect(Collectors.toList());
    }

    @Override
    public GetUserResponseDTO findUserById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User with ID " + id + " not found"));
        
        return new GetUserResponseDTO(
                user.getId(),
                user.getName(),
                user.getEmail()
        );
    }

    @Override
    public void deleteUser(Long id) {
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException("User with ID " + id + " not found");
        }
        userRepository.deleteById(id);
    }
}
