package com.codewithsamdouc.developpement_back_end.Repository;

import com.codewithsamdouc.developpement_back_end.Entity.Enrollment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EnrollmentRepository extends JpaRepository<Enrollment, Long> {
    /**
     * findBy → SELECT * FROM
     * User → la relation user dans ton entité Enrollment
     * Id → le champ id de cette relation
     * @param userId
     * @return
     */
    List<Enrollment> findByUserId(Long userId);


    List<Enrollment> findByCourseId(Long courseId);

}
