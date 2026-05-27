package com.codewithsamdouc.developpement_back_end.Mapper;

import com.codewithsamdouc.developpement_back_end.DTO.ChapterDTO;
import com.codewithsamdouc.developpement_back_end.Entity.ChapterEntity;
import org.springframework.stereotype.Component;

@Component
public class ChapterMapper {


    public ChapterDTO mapToDTO (ChapterEntity chapterEntity) {
        return new ChapterDTO(
            chapterEntity.getId(),
            chapterEntity.getTitle(),
            chapterEntity.getContent(),
            chapterEntity.getOrderIndex(),
            chapterEntity.getCourse().getId()
        );
    }

    public ChapterEntity mapToEntity (ChapterDTO chapterDTO) {
        return new ChapterEntity(
                chapterDTO.getId(),
                chapterDTO.getTitle(),
                chapterDTO.getContent(),
                chapterDTO.getOrderIndex(),
                null
        );
    }
}
