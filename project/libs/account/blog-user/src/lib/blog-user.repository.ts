import { Injectable } from '@nestjs/common';
import { BlogUserEntity } from './blog-user.entity';
import { BlogUserFactory } from './blog-user.factory';

import { BaseMemoryRepository } from '@project/shared/data-access';

@Injectable()
export class BlogUserRepository extends BaseMemoryRepository<BlogUserEntity> {
  constructor(entityFactory: BlogUserFactory) {
    super(entityFactory);
  }

  async findByEmail(email: string): Promise<BlogUserEntity | null> {
    const entities = Array.from(this.entities.values());

    const user = entities.find(entity => entity.email === email);

    if (!user) {
      return null;
    }

    return this.entityFactory.create(user);
  }
}
