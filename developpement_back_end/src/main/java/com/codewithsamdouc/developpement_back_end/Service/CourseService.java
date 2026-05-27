package com.codewithsamdouc.developpement_back_end.Service;


import com.codewithsamdouc.developpement_back_end.ApiError.NotFoundExeception;
import com.codewithsamdouc.developpement_back_end.DTO.CourseDTO;
import com.codewithsamdouc.developpement_back_end.Entity.CourseEntity;
import com.codewithsamdouc.developpement_back_end.Entity.UserEntity;
import com.codewithsamdouc.developpement_back_end.Mapper.CourseMapper;
import com.codewithsamdouc.developpement_back_end.Repository.CourseRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CourseService {


    final CourseRepository courseRepository;

    final CourseMapper courseMapper;

    final UserService userService;


    public CourseService(CourseRepository courseRepository, CourseMapper courseMapper, UserService userService) {
        this.courseRepository = courseRepository;
        this.courseMapper = courseMapper;
        this.userService = userService;
    }


    /**
     * Liste des cours
     * @return
     */
    public List<CourseDTO> getAllCours() {
        List<CourseEntity> courseEntityList = courseRepository.findAll();
        List<CourseDTO> courseDTOS = new ArrayList<>();

        for (CourseEntity course: courseEntityList) {
            CourseDTO dto = courseMapper.mapToDTO(course);
            courseDTOS.add(dto);
        }

        return courseDTOS;
    }


    /**
     * Recherche un cours par son id
     * @param id
     * @return
     */
    public CourseDTO getCourseById(Long id) {
        CourseEntity courseEntity = courseRepository.findById(id).orElseThrow(() -> new NotFoundExeception("Course no found"));
        return  courseMapper.mapToDTO(courseEntity);
    }


    /**
     * Sauvegarder un cours
     * @param newOrder
     * UserEntity user, permet d'aller chercher l'id de la clé étranger de l'utilisateur
     * Grâce à la méthode getUserEntityById dans le service user
     * @return
     */
    public CourseDTO createCourse(CourseDTO newOrder){
        CourseEntity courseEntity = courseMapper.mapToEntity(newOrder);

        UserEntity user = userService.getUserEntityById(newOrder.getUserId());
        courseEntity.setUser(user);

        CourseEntity saveCourse = courseRepository.save(courseEntity);

        return courseMapper.mapToDTO(saveCourse);
    }


    /**
     * Modification d'un cours
     * @param id
     * @param courseDetails
     * @return
     */
    public CourseDTO updateCourse(Long id, CourseEntity courseDetails){
        CourseEntity course = courseRepository.findById(id).orElseThrow(() -> new NotFoundExeception("Course Not found"));
        course.setTitle(courseDetails.getTitle());
        course.setDescription(courseDetails.getDescription());
        course.setCreatedAt(courseDetails.getCreatedAt());

        CourseEntity saveCourse = courseRepository.save(course);

        return courseMapper.mapToDTO(saveCourse);
    }

    /**
     * Supprimer un cours
     * @param id
     */

    public void deleteCourse(Long id) {
        CourseEntity courseEntity = courseRepository.findById(id).orElseThrow(() -> new NotFoundExeception("Course Not found"));
        courseRepository.delete(courseEntity);
    }


    /**
     * Avoir l'id de l'entité course
     * @param id
     * @return
     */
    public CourseEntity getCourseEntityById(Long id){
        return courseRepository.findById(id).orElseThrow(() -> new NotFoundExeception("Course Not found"));
    }

}
