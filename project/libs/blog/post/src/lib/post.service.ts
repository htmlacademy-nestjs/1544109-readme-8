import { Inject, Injectable } from '@nestjs/common';

import { dbConfig } from '@project/blog/configuration';

import { PostRepository } from './post.repository';
import { ConfigType } from '@nestjs/config';
import { PostEntity } from './post.entity';
import { PostQueryDTO } from './dto/post-query.dto';
import { PaginationResult } from '@project/shared/core';

@Injectable()
export class PostService {
  constructor(
    private readonly postRepository: PostRepository,
    @Inject(dbConfig.KEY) private readonly databaseConfig: ConfigType<typeof dbConfig>,
  ) {}

  async getPosts(query: PostQueryDTO): Promise<PaginationResult<PostEntity>> {
    return this.postRepository.find(query);
  }
}