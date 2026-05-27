package com.codewithsamdouc.developpement_back_end.Controller;

import com.codewithsamdouc.developpement_back_end.DTO.ChapterDTO;
import com.codewithsamdouc.developpement_back_end.Entity.ChapterEntity;
import com.codewithsamdouc.developpement_back_end.Service.ChapterService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/chapters")
public class ChapterController {

    final ChapterService chapterService;

    public ChapterController(ChapterService chapterService) {
        this.chapterService = chapterService;
    }

    @GetMapping
    public ResponseEntity<List<ChapterDTO>> getAllChapter() {
        return  new ResponseEntity<>(chapterService.getAllChapter(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ChapterDTO> getChapterById(@PathVariable Long id){
        ChapterDTO chapterDTO = chapterService.getCourseById(id);
        return new ResponseEntity<>(chapterDTO, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ChapterDTO> createChapter(@RequestBody ChapterDTO chapterDTO){
        ChapterDTO chapterCreate = chapterService.createChapter(chapterDTO);
        return new ResponseEntity<>(chapterCreate, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ChapterDTO> updateChapter(@RequestBody ChapterEntity chapter, @PathVariable Long id){
        ChapterDTO chapterUpdate = chapterService.updateChapter(id, chapter);

        return new ResponseEntity<>(chapterUpdate, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteChapter(@PathVariable Long id){
        chapterService.deleteChapter(id);

        return new ResponseEntity<>(HttpStatus.OK);
    }

}
