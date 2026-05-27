package com.codewithsamdouc.developpement_back_end.Service;


import com.codewithsamdouc.developpement_back_end.ApiError.NotFoundExeception;
import com.codewithsamdouc.developpement_back_end.DTO.EnrollmentDTO;
import com.codewithsamdouc.developpement_back_end.Entity.CourseEntity;
import com.codewithsamdouc.developpement_back_end.Entity.Enrollment;
import com.codewithsamdouc.developpement_back_end.Entity.Role;
import com.codewithsamdouc.developpement_back_end.Entity.UserEntity;
import com.codewithsamdouc.developpement_back_end.Mapper.EnrollmentMapper;
import com.codewithsamdouc.developpement_back_end.Repository.CourseRepository;
import com.codewithsamdouc.developpement_back_end.Repository.EnrollmentRepository;
import com.codewithsamdouc.developpement_back_end.Repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class EnrollmentService {

    final EnrollmentRepository enrollmentRepository;

    final EnrollmentMapper enrollmentMapper;

    final CourseService courseService;

    final UserService userService;

    final UserRepository userRepository;


    public EnrollmentService(EnrollmentRepository enrollmentRepository,
                             EnrollmentMapper enrollmentMapper,
                             CourseService courseService, UserService userService,
                             UserRepository userRepository) {
        this.enrollmentRepository = enrollmentRepository;
        this.enrollmentMapper = enrollmentMapper;
        this.courseService = courseService;
        this.userService = userService;
        this.userRepository = userRepository;
    }

    public List<EnrollmentDTO> getAllEnrollment() {
        List<Enrollment> enrollments = enrollmentRepository.findAll();
        List<EnrollmentDTO> enrollmentDTOS = new ArrayList<>();

        for(Enrollment enrollment: enrollments){
            EnrollmentDTO enrollmentDTO = enrollmentMapper.mapToDTO(enrollment);
            enrollmentDTOS.add(enrollmentDTO);
        }

        return enrollmentDTOS;
    }


    public EnrollmentDTO getEnrollmentById(Long id){
        Enrollment enrollment = enrollmentRepository.findById(id).orElseThrow(() -> new NotFoundExeception("Enrollement not found"));
        return enrollmentMapper.mapToDTO(enrollment);
    }


    public EnrollmentDTO createEnrollment (EnrollmentDTO newEnrollment){
        Enrollment enrollment = enrollmentMapper.mapToEntity(newEnrollment);

        CourseEntity course = courseService.getCourseEntityById(newEnrollment.getCourseId());
        enrollment.setCourse(course);

        UserEntity user = userService.getUserEntityById(newEnrollment.getUserId());
        enrollment.setUser(user);

        Enrollment saveEnrollment = enrollmentRepository.save(enrollment);

        return  enrollmentMapper.mapToDTO(saveEnrollment);
    }


    /**
     * Exemple : étudiant id=1 est inscrit à Java, Angular, React
     * @param studentId
     * @return
     * .stream()  //// convertit la liste en flux
     * .map(enrollmentMapper::mapToDTO) //// transforme chaque Enrollment en DTO
     * .collect(Collectors.toList());     //// remet tout dans une liste
     */
    public List<EnrollmentDTO> getEnrollmentsByStudent(Long studentId){

        UserEntity user =  userRepository.findById(studentId).orElseThrow();
        if (user.getRole() != Role.STUDENT){
            throw new RuntimeException("Cet utilisateur n/'est pas un student!!");
        }

            return enrollmentRepository.findByUserId(studentId)
                    .stream()
                    .map(enrollmentMapper::mapToDTO)
                    .collect(Collectors.toList());

    }


    /**
     *
     * @param courseId
     * @return
     * .stream()  //// convertit la liste en flux
     * .map(enrollmentMapper::mapToDTO) //// transforme chaque Enrollment en DTO
     * .collect(Collectors.toList());     //// remet tout dans une liste
     */
    public  List<EnrollmentDTO> getEnrollmentsByCourse(Long courseId){

        return  enrollmentRepository.findByCourseId(courseId)
                .stream()
                .map(enrollmentMapper::mapToDTO)
                .collect(Collectors.toList());
    }
}
