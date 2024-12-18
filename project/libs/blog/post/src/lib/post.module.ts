import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModel, PostSchema } from './post.model';
import { PostFactory } from './post.factory';
import { PostRepository } from './post.repository';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: PostModel.name,
        schema: PostSchema,
      },
    ]),
  ],
  controllers: [PostController],
  providers: [PostFactory, PostRepository, PostService],
  exports: [PostRepository],
})
export class PostModule {}
