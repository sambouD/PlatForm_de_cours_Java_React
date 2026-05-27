package com.codewithsamdouc.developpement_back_end.Security;

import lombok.Data;

@Data
public class LoginRequest {
    private String email;
    private String password;
}
