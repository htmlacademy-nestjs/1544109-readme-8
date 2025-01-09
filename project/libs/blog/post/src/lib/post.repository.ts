import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, SortOrder } from 'mongoose';

import { BaseMongoRepository } from '@project/shared/data-access';

import { PostEntity } from './post.entity';
import { PostFactory } from './post.factory';
import { PostModel } from './post.model';
import { PostQueryDTO } from './dto/post-query.dto';
import { PaginationResult, Sort } from '@project/shared/core';
import { Type } from './post.interface';

@Injectable()
export class PostRepository extends BaseMongoRepository<PostEntity, PostModel> {
  constructor(
    entityFactory: PostFactory,
    @InjectModel(PostModel.name) postModel: Model<PostModel>
  ) {
    super(entityFactory, postModel);
  }

  async find(query: PostQueryDTO): Promise<PaginationResult<PostEntity>> {
    const filters: {userId?: string, type?: Type, tags?: object }  = {};
    const sort: { [key: string]: SortOrder} = {};
    const skip = (query.page - 1) * query.limit;
    const limit = query.limit;

    if (query.authorId) {
      filters.userId = query.authorId;
    }

    if (query.type) {
      filters.type = query.type;
    }

    if (query.tag) {
      filters.tags = { $in: query.tag };
    }

    switch (query.sort) {
      case Sort.Likes:
        sort['likesQuantity'] = -1
        break;
      case Sort.Comments:
        sort['commentsQuantity'] = -1
        break;
      default:
        sort['createdAt'] = -1;
    }

    const results = await this.model.find(filters).sort(sort).skip(skip).limit(limit);

    const totalPosts = await this.model.find(filters).countDocuments();

    return {
      entities: results.map(item => this.createEntityFromDocument(item) as PostEntity),
      totalPages: Math.ceil(totalPosts / limit),
      totalItems: totalPosts,
      currentPage: query.page,
      itemsPerPage: limit,
    }
  }
}
