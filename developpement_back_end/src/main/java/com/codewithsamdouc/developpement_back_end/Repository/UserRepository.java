package com.codewithsamdouc.developpement_back_end.Repository;

import com.codewithsamdouc.developpement_back_end.Entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByEmail(String email);
}
