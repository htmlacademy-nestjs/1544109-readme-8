import { Injectable } from '@nestjs/common';

import { BaseMongoRepository } from '@project/shared/data-access';
import { CommentEntity } from './comment.entity';
import { CommentFactory } from './comment.factory';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommentModel } from './comment.model';


@Injectable()
export class CommentRepository extends BaseMongoRepository<CommentEntity, CommentModel> {
  constructor(
    entityFactory: CommentFactory,
    @InjectModel(CommentModel.name) commentModel: Model<CommentModel>
  ) {
    super(entityFactory, commentModel)
  }

  async findByPostId(postId: string): Promise<CommentEntity[]> {
    const results = await this.model.find({ postId }).exec();

    return results.map(comment => this.createEntityFromDocument(comment) as CommentEntity);
  }

  async deleteByPostId(postId: string): Promise<number> {
    const results = await this.model.deleteMany({ postId }).exec();

    return results.deletedCount;
  }
}
