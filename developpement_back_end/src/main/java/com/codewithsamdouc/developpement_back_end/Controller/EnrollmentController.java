package com.codewithsamdouc.developpement_back_end.Controller;

import com.codewithsamdouc.developpement_back_end.DTO.EnrollmentDTO;
import com.codewithsamdouc.developpement_back_end.Service.EnrollmentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/enrollments")
public class EnrollmentController {

    final EnrollmentService enrollmentService;

    public EnrollmentController(EnrollmentService enrollmentService) {
        this.enrollmentService = enrollmentService;
    }

    @GetMapping
    public ResponseEntity<List<EnrollmentDTO>> getAllEnrollment () {
        return new ResponseEntity<>(enrollmentService.getAllEnrollment(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EnrollmentDTO> getEnrollmentById(@PathVariable Long id){
        EnrollmentDTO enrollmentDTO = enrollmentService.getEnrollmentById(id);
        return  new ResponseEntity<>(enrollmentDTO, HttpStatus.OK);
    }

    @PostMapping
    public  ResponseEntity<EnrollmentDTO> createEnrollment(@RequestBody EnrollmentDTO enrollmentDTO){
        EnrollmentDTO enrollmentCreate = enrollmentService.createEnrollment(enrollmentDTO);
        return  new ResponseEntity<>(enrollmentCreate, HttpStatus.CREATED);
    }

    /**
     * Quels cours est-ce que cet étudiant a rejoint ?
     */
    @GetMapping("/{studentId}")
    public ResponseEntity<List<EnrollmentDTO>> getEnrollmentsByStudent (@PathVariable Long studentId){

        return new ResponseEntity<>(enrollmentService.getEnrollmentsByStudent(studentId), HttpStatus.OK);
    }

    /**
     * Quels étudiants sont inscrits à ce cours ?
     */
    @GetMapping("/{courseId}")
    public ResponseEntity<List<EnrollmentDTO>> getEnrollmentsByCourse(@PathVariable Long courseId){
        return  new ResponseEntity<>(enrollmentService.getEnrollmentsByCourse(courseId), HttpStatus.OK);
    }


}
