package com.codewithsamdouc.developpement_back_end.ApiError;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.LocalDateTime;

@ControllerAdvice
public class CustomExceptionHandler {
    @ExceptionHandler(NotFoundExeception.class)
    public ResponseEntity<ApiError> handleNotFoundException(NotFoundExeception e) {
        ApiError  apiError = new ApiError();
        apiError.setMessage(e.getMessage());
        apiError.setCode(HttpStatus.NOT_FOUND.value());
        apiError.setTimestamp(LocalDateTime.now());

        return  new ResponseEntity<>(apiError, HttpStatus.NOT_FOUND);
    }
}
