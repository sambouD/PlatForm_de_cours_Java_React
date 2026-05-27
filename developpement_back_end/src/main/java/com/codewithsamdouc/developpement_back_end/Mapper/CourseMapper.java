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
                course.getUser().getId()

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
