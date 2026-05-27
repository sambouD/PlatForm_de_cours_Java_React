package com.codewithsamdouc.developpement_back_end.Controller;

import com.codewithsamdouc.developpement_back_end.DTO.CourseDTO;
import com.codewithsamdouc.developpement_back_end.Entity.CourseEntity;
import com.codewithsamdouc.developpement_back_end.Service.CourseService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/courses")
public class CourseController {

    final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping
    public ResponseEntity<List<CourseDTO>> getAllCourse(){
        return new ResponseEntity<>(courseService.getAllCours(), HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity<CourseDTO> getCourseById(@PathVariable Long id){
        CourseDTO courseDTO = courseService.getCourseById(id);

        return new ResponseEntity<>(courseDTO, HttpStatus.OK);
    }


    @PostMapping
    public ResponseEntity<CourseDTO> createCourse(@RequestBody CourseDTO courseDTO){
        CourseDTO courseCreate = courseService.createCourse(courseDTO);
        return new ResponseEntity<>(courseCreate, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CourseDTO> updateCourse(@RequestBody CourseEntity course, @PathVariable Long id){
        CourseDTO courseUpdate = courseService.updateCourse(id, course);
        return new ResponseEntity<>(courseUpdate, HttpStatus.OK);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable Long id){
        courseService.deleteCourse(id);

        return new ResponseEntity<>(HttpStatus.OK);
    }


}
