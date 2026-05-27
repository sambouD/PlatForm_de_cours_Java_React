package com.codewithsamdouc.developpement_back_end.Controller;

import com.codewithsamdouc.developpement_back_end.DTO.UserDTO;
import com.codewithsamdouc.developpement_back_end.Entity.UserEntity;
import com.codewithsamdouc.developpement_back_end.Service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/users")
public class UserController {

    final UserService userService;
    

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<UserDTO>> getAllUsers() {
        return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable Long id) {
        UserDTO user = userService.getUserById(id);
        return new ResponseEntity<>(user,HttpStatus.OK);
    }

    @PostMapping
    public  ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userDTO){
        UserDTO userCreated = userService.createUser(userDTO);
        return new ResponseEntity<>(userCreated,HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public  ResponseEntity<UserDTO> updateUser(@RequestBody UserEntity user, @PathVariable Long id){
        UserDTO userUpdate = userService.updateUser(id, user);
        return  new ResponseEntity<>(userUpdate, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
