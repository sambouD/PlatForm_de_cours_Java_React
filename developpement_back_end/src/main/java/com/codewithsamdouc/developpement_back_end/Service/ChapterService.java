package com.codewithsamdouc.developpement_back_end.Service;

import com.codewithsamdouc.developpement_back_end.ApiError.NotFoundExeception;
import com.codewithsamdouc.developpement_back_end.DTO.ChapterDTO;
import com.codewithsamdouc.developpement_back_end.Entity.ChapterEntity;
import com.codewithsamdouc.developpement_back_end.Entity.CourseEntity;
import com.codewithsamdouc.developpement_back_end.Mapper.ChapterMapper;
import com.codewithsamdouc.developpement_back_end.Repository.ChapterRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ChapterService {

    final ChapterRepository chapterRepository;
    final ChapterMapper chapterMapper;

    final CourseService courseService;

    public ChapterService(ChapterRepository chapterRepository,
                          ChapterMapper chapterMapper,
                          CourseService courseService) {
        this.chapterRepository = chapterRepository;
        this.chapterMapper = chapterMapper;
        this.courseService = courseService;
    }


    /**
     *Liste de chapitres
     * @return
     */
    public List<ChapterDTO> getAllChapter() {
        List<ChapterEntity> chapterEntities = chapterRepository.findAll();
        List<ChapterDTO> chapterDTOS = new ArrayList<>();

        for (ChapterEntity chapterEntity : chapterEntities) {
            ChapterDTO chapterDTO = chapterMapper.mapToDTO(chapterEntity);
            chapterDTOS.add(chapterDTO);
        }

        return  chapterDTOS;
    }


    /**
     * Recherche un cours par son id
     * @param id
     * @return
     */
    public ChapterDTO getCourseById(Long id){
        ChapterEntity chapterEntity = chapterRepository.findById(id).orElseThrow(() -> new NotFoundExeception("Chapter no found"));
        return chapterMapper.mapToDTO(chapterEntity);
    }


    /**
     *
     * @param newChapter
     * permet d'aller chercher l'id de la clé étranger de l'utilisateur
     * Grâce à la méthode getCourseEntityById() dans le service user
     * @return
     */
    public  ChapterDTO createChapter(ChapterDTO newChapter) {
        ChapterEntity chapterEntity = chapterMapper.mapToEntity(newChapter);

        CourseEntity course = courseService.getCourseEntityById(newChapter.getCourseId());

        chapterEntity.setCourse(course);

        ChapterEntity saveChapter  = chapterRepository.save(chapterEntity);

        return  chapterMapper.mapToDTO(saveChapter);
    }


    /**
     * Modification d'un cours
     * @param id
     * @param chapterDetails
     * @return
     */
    public ChapterDTO updateChapter(Long id, ChapterEntity chapterDetails){
        ChapterEntity chapter = chapterRepository.findById(id).orElseThrow(() -> new NotFoundExeception("Chapter not found"));
        chapter.setTitle(chapterDetails.getTitle());
        chapter.setContent(chapterDetails.getContent());

        ChapterEntity saveCourse = chapterRepository.save(chapter);

        return chapterMapper.mapToDTO(saveCourse);
    }

    /**
     * Supprimer un Chapter
     * @param id
     */
    public void deleteChapter(Long id) {
        ChapterEntity chapter = chapterRepository.findById(id).orElseThrow(() -> new NotFoundExeception("Chapter not found"));
        chapterRepository.delete(chapter);
    }



}
