package com.codewithsamdouc.developpement_back_end.Security;

import com.codewithsamdouc.developpement_back_end.ApiError.NotFoundExeception;
import com.codewithsamdouc.developpement_back_end.Entity.UserEntity;
import com.codewithsamdouc.developpement_back_end.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private  final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    //Register
    public String register(UserEntity user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);

        return jwtService.generateToken(user.getEmail());
    }


    // Login
    public String login(String email, String password) {
        authenticationManager.authenticate(
          new UsernamePasswordAuthenticationToken(email, password)
        );
        UserEntity user = userRepository.findByEmail(email)
                .orElseThrow(() -> new NotFoundExeception("User not found"));
        return jwtService.generateToken(user.getEmail());
    }

}
