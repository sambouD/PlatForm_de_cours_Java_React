package com.codewithsamdouc.developpement_back_end.ApiError;

public class NotFoundExeception extends  RuntimeException{

    public NotFoundExeception(String message) {
        super(message);
    }
}