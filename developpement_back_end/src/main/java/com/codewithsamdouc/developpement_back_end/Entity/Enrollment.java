package com.codewithsamdouc.developpement_back_end.Entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "enrollments")
public class Enrollment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    LocalDate enrolledAt;

    @ManyToOne
    @JoinColumn(name = "student_id", nullable = false)
    UserEntity user;

    @ManyToOne
    @JoinColumn(name = "course_id", nullable = false)
    CourseEntity course;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getEnrolledAt() {
        return enrolledAt;
    }

    public void setEnrolledAt(LocalDate enrolledAt) {
        this.enrolledAt = enrolledAt;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }

    public CourseEntity getCourse() {
        return course;
    }

    public void setCourse(CourseEntity course) {
        this.course = course;
    }

    public Enrollment() {
    }

    public Enrollment(Long id, LocalDate enrolledAt, UserEntity user, CourseEntity course) {
        this.id = id;
        this.enrolledAt = enrolledAt;
        this.user = user;
        this.course = course;
    }
}
