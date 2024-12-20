import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseMongoRepository } from '@project/shared/data-access';

import { PostEntity } from './post.entity';
import { PostFactory } from './post.factory';
import { PostModel } from './post.model';

@Injectable()
export class PostRepository extends BaseMongoRepository<PostEntity, PostModel> {
  constructor(
    entityFactory: PostFactory,
    @InjectModel(PostModel.name) postModel: Model<PostModel>
  ) {
    super(entityFactory, postModel);
  }

  async find(): Promise<PostEntity[]> {
    const results = await this.model.find().exec();

    return results.map(item => this.createEntityFromDocument(item) as PostEntity);
  }
}
