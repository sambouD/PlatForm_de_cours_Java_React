package com.codewithsamdouc.developpement_back_end.Repository;

import com.codewithsamdouc.developpement_back_end.Entity.CourseEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<CourseEntity, Long> {
}
