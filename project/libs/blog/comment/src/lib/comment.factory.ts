import { Injectable } from '@nestjs/common';
import { EntityFactory } from '@project/shared/core';
import { CommentEntity } from './comment.entity';
import { Comment } from './comment.interface';
import { CreateCommentDTO } from './dto/create-comment.dto';

@Injectable()
export class CommentFactory implements EntityFactory<CommentEntity> {
  create(POJO: Comment): CommentEntity {
    return new CommentEntity(POJO);
  }

  static createFromCreateCommentDTO(dto: CreateCommentDTO): CommentEntity {
    const entity = new CommentEntity();

    entity.text = dto.text;
    entity.postId = dto.postId;

    //TODO: FIXME: should be gotten automatically
    entity.userId = dto.userId;

    return entity;
  }
}
