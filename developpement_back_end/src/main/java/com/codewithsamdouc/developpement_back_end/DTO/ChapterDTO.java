package com.codewithsamdouc.developpement_back_end.DTO;

public class ChapterDTO {

    Long id;

    String title;

    String content;

    int orderIndex;

    Long courseId;

    String courseTitle;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getOrderIndex() {
        return orderIndex;
    }

    public void setOrderIndex(int orderIndex) {
        this.orderIndex = orderIndex;
    }

    public Long getCourseId() {
        return courseId;
    }

    public void setCourseId(Long courseId) {
        this.courseId = courseId;
    }

    public String getCourseTitle() {
        return courseTitle;
    }

    public void setCourseTitle(String courseTitle) {
        this.courseTitle = courseTitle;
    }

    public ChapterDTO() {
    }

    public ChapterDTO(Long id, String title, String content, int orderIndex, Long courseId, String courseTitle) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.orderIndex = orderIndex;
        this.courseId = courseId;
        this.courseTitle = courseTitle;
    }


}
