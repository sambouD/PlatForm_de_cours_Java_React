package com.codewithsamdouc.developpement_back_end.Service;

import com.codewithsamdouc.developpement_back_end.ApiError.NotFoundExeception;
import com.codewithsamdouc.developpement_back_end.DTO.UserDTO;
import com.codewithsamdouc.developpement_back_end.Entity.UserEntity;
import com.codewithsamdouc.developpement_back_end.Mapper.UserMapper;
import com.codewithsamdouc.developpement_back_end.Repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    final UserRepository userRepository;

    final UserMapper userMapper;

    public UserService(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }


    /**
     * Liste des utilisateurs
     * @return
     */
    public List<UserDTO> getAllUsers() {
        List<UserEntity> userEntityList = userRepository.findAll();
        List<UserDTO> userDTOS = new ArrayList<>();

        for (UserEntity user: userEntityList) {
            UserDTO userDTO = userMapper.mapToDTO(user);
            userDTOS.add(userDTO);
        }

        return  userDTOS;

    }

    /**
     * Recherche un user par son id
     * Faire une exception avec RuntimeException
     * @param id
     * @return
     */
    public UserDTO getUserById(Long id) {
        UserEntity userEntity = userRepository.findById(id).orElseThrow(() -> new NotFoundExeception("User Not found") );
        return  userMapper.mapToDTO(userEntity);
    }


    /**
     * Ajouter un utilisateur
     * @param newUser
     * @return
     */
    public UserDTO createUser (UserDTO newUser) {
        UserEntity user = userMapper.mapToEnity(newUser);
        UserEntity saveUser = userRepository.save(user);

        return userMapper.mapToDTO(saveUser);

    }


    /**
     * Modifier
     * @param id
     * @param userDetails
     * @return
     */
    public UserDTO updateUser(Long id, UserEntity userDetails) {
        UserEntity user = userRepository.findById(id).orElseThrow(() -> new NotFoundExeception("User not found"));
        user.setFirstName(userDetails.getFirstName());
        user.setLastName(userDetails.getLastName());
        user.setEmail(userDetails.getEmail());

        UserEntity saveUser = userRepository.save(user);
        return userMapper.mapToDTO(saveUser);
    }


    /**
     * Supprimer utilisateur
     * @param id
     */
    public void deleteUser(Long id) {
        UserEntity user = userRepository.findById(id).orElseThrow(() -> new NotFoundExeception("user not found"));
        userRepository.delete(user);
    }

    public UserEntity getUserEntityById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new NotFoundExeception("User not found"));
    }









}
