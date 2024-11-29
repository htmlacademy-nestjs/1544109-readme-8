import { AuthUser, EntityFactory } from '../../../../shared/core/src';
import { BlogUserEntity } from './blog-user.entity';

export class BlogUserFactory implements EntityFactory<BlogUserEntity> {
  create(POJO: AuthUser): BlogUserEntity {
    return new BlogUserEntity(POJO);
  }
}
