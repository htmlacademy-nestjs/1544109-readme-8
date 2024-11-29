import { Injectable } from '@nestjs/common';
import { AuthUser, EntityFactory } from '../../../../shared/core/src';
import { BlogUserEntity } from './blog-user.entity';

@Injectable()
export class BlogUserFactory implements EntityFactory<BlogUserEntity> {
  create(POJO: AuthUser): BlogUserEntity {
    return new BlogUserEntity(POJO);
  }
}
