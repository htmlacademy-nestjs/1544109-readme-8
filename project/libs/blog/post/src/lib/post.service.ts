import { Inject, Injectable } from '@nestjs/common';

import { dbConfig } from '@project/blog/configuration';

import { PostRepository } from './post.repository';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class PostService {
  constructor(
    private readonly postRepository: PostRepository,
    @Inject(dbConfig.KEY) private readonly databaseConfig: ConfigType<typeof dbConfig>,
  ) {}

  // TODO: add parameter "query"
  async getPosts(): Promise<any> {
    return this.postRepository.find();
  }
}