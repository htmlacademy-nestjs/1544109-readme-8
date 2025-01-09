import { PostEntity } from './../../../post/src/lib/post.entity';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { dbConfig } from '@project/blog/configuration';
import { PostRepository } from '@project/blog/post';
import { CommentEntity } from './comment.entity';
import { CommentFactory } from './comment.factory';
import { CommentRepository } from './comment.repository';
import { CreateCommentDTO } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
  constructor(
    private readonly commentRepository: CommentRepository,
    private readonly postRepository: PostRepository,
    @Inject(dbConfig.KEY) private readonly databaseConfig: ConfigType<typeof dbConfig>,
  ) {}

  async getByPostId(postId: string): Promise<CommentEntity[]> {
    return this.commentRepository.findByPostId(postId);
  }

  //TODO: FIXME: use transaction
  async create(postId: string, dto: CreateCommentDTO): Promise<CommentEntity | null> {
    const post  = await this.postRepository.findById(postId) as PostEntity;

    const comment = CommentFactory.createFromCreateCommentDTO({...dto, postId});

    const newComment = await this.commentRepository.save(comment);

    post.commentsQuantity ++;
    await this.postRepository.update(post);

    return newComment;
  }

  async delete(postId: string, id: string): Promise<void> {
    const post  = await this.postRepository.findById(postId) as PostEntity;

    const comment = await this.commentRepository.findById(id);

    if (comment?.postId !== postId) {
      throw new NotFoundException(`Comment with id ${id} doesn't match with provided postId ${postId}`);
    }

    await this.commentRepository.deleteById(id);

    post.commentsQuantity --;
    await this.postRepository.update(post);
  }

  async deleteAllByPostId(postId: string): Promise<number> {
    await this.postRepository.findById(postId);
    
    return this.commentRepository.deleteByPostId(postId);
  }
}
