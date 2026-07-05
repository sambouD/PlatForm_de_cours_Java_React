package com.codewithsamdouc.developpement_back_end.DTO;

import java.time.LocalDate;

public class EnrollmentDTO {


    Long id;

    LocalDate enrolledAt;

    Long userId;

    Long courseId;


    String userName;

    String courseTitle;

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

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getCourseId() {
        return courseId;
    }

    public void setCourseId(Long courseId) {
        this.courseId = courseId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getCourseTitle() {
        return courseTitle;
    }

    public void setCourseTitle(String courseTitle) {
        this.courseTitle = courseTitle;
    }

    public EnrollmentDTO() {
    }

    public EnrollmentDTO(Long id, LocalDate enrolledAt, Long userId, String userName, Long courseId, String courseTitle) {
        this.id = id;
        this.enrolledAt = enrolledAt;
        this.userId = userId;
        this.courseId = courseId;
        this.userName = userName;
        this.courseTitle = courseTitle;
    }
}
