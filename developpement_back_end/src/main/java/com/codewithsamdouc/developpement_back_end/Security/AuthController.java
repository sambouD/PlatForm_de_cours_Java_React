package com.codewithsamdouc.developpement_back_end.Security;

import com.codewithsamdouc.developpement_back_end.Entity.UserEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    //Register
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UserEntity user) {
        String token = authService.register(user);
        return  ResponseEntity.ok(token);
    }

    // Longin

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest request) {
        String token = authService.login(request.getEmail(), request.getPassword());
        return ResponseEntity.ok(token);
    }


}
