import { Injectable } from '@nestjs/common';
import { EntityFactory } from '@project/shared/core';
import { PostEntity } from './post.entity';
import { Post } from './post.interface';

@Injectable()
export class PostFactory implements EntityFactory<PostEntity> {
  create(POJO: Post): PostEntity {
    return new PostEntity(POJO);
  }
}
