package com.codewithsamdouc.developpement_back_end.Mapper;

import com.codewithsamdouc.developpement_back_end.DTO.EnrollmentDTO;
import com.codewithsamdouc.developpement_back_end.Entity.Enrollment;
import org.springframework.stereotype.Component;

@Component
public class EnrollmentMapper {

    public EnrollmentDTO mapToDTO(Enrollment enrollment) {
        return new EnrollmentDTO(
                enrollment.getId(),
                enrollment.getEnrolledAt(),
                enrollment.getUser() != null ? enrollment.getUser().getId() : null,
                enrollment.getUser() != null ? enrollment.getUser().getFirstName() + " " + enrollment.getUser().getLastName() : null,
                enrollment.getCourse() != null ? enrollment.getCourse().getId() : null,
                enrollment.getCourse() != null ? enrollment.getCourse().getTitle() : null


        );
    }

    public Enrollment mapToEntity(EnrollmentDTO enrollmentDTO) {
        return  new Enrollment(
                enrollmentDTO.getId(),
                enrollmentDTO.getEnrolledAt(),
                null,
                null
        );
    }
}
