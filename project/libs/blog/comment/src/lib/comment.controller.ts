import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { fillDto } from '@project/shared/helpers';
import { CommentService } from './comment.service';
import { CreateCommentDTO } from './dto/create-comment.dto';
import { CommentRDO } from './rdo/comment.rdo';

@Controller('posts/:postId/comments')
export class CommentController {
  constructor(
    private readonly commentService: CommentService,
  ) {}

  @Get('/')
  async index(@Param('postId') postId: string) {
    const comments = await this.commentService.getByPostId(postId);

    return fillDto(CommentRDO, comments.map(comment => comment.toPOJO()));
  }

  @Post('/')
  async create(@Param('postId') postId: string, @Body() dto: CreateCommentDTO) {
    const newComment = await this.commentService.create(postId, dto);

    return fillDto(CommentRDO, newComment!.toPOJO());
  }

  @Delete('/:id')
  async delete(@Param('postId') postId: string, @Param('id') id: string) {
    await this.commentService.delete(postId, id);
  }
}
