package com.codewithsamdouc.developpement_back_end.Mapper;

import com.codewithsamdouc.developpement_back_end.DTO.UserDTO;
import com.codewithsamdouc.developpement_back_end.Entity.UserEntity;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {


    public UserDTO mapToDTO(UserEntity user){

        return new UserDTO(
                user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getPassword(),
                user.getRole()
        );
    }

    public UserEntity mapToEnity(UserDTO dto) {

        return new UserEntity(
             dto.getId(),
             dto.getFirstName(),
             dto.getLastName(),
             dto.getEmail(),
             dto.getPassword(),
             dto.getRole()
        );
    }
}
