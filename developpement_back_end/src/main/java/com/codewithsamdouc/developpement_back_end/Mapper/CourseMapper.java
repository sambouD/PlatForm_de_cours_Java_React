package com.codewithsamdouc.developpement_back_end.Mapper;

import com.codewithsamdouc.developpement_back_end.DTO.CourseDTO;
import com.codewithsamdouc.developpement_back_end.Entity.CourseEntity;
import org.springframework.stereotype.Component;

@Component
public class CourseMapper {

    public CourseDTO mapToDTO(CourseEntity course){
        return new CourseDTO(
                course.getId(),
                course.getTitle(),
                course.getDescription(),
                course.getCreatedAt(),
                course.getUser() != null ? course.getUser().getId() : null,
                course.getUser() != null ? course.getUser().getLastName()+ " " + course.getUser().getFirstName() : null// Avoir le nom et prenom de la personne au liée d'avoir son id

        );

    }

    public CourseEntity mapToEntity(CourseDTO courseDTO) {
        return  new CourseEntity(
                courseDTO.getId(),
                courseDTO.getTitle(),
                courseDTO.getDescription(),
                courseDTO.getCreatedAt(),
                null
        );
    }
}
