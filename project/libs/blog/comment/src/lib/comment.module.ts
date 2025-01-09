import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentModel, CommentSchema } from './comment.model';
import { CommentController } from './comment.controller';
import { CommentFactory } from './comment.factory';
import { CommentRepository } from './comment.repository';
import { CommentService } from './comment.service';
import { PostModule } from '../../../post/src';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CommentModel.name,
        schema: CommentSchema,
      }
    ]),
    PostModule,
  ],
  controllers: [CommentController],
  providers: [CommentFactory, CommentRepository, CommentService],
  exports: [],
})
export class CommentModule {}
