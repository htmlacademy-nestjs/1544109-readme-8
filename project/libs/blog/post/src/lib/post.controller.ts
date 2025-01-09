import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { fillDto } from '@project/shared/helpers';
import { PostRDO } from './rdo/post.rdo';
import { PostQueryDTO } from './dto/post-query.dto';
import { PostWithPaginationRDO } from './rdo/post-with-pagination.rdo';

@ApiTags('posts')
@Controller('posts')
export class PostController {
  constructor(
    private readonly postService: PostService,
  ) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Posts are found',
    type: PostRDO,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Posts are not found',
  })
  @Get('/')
  async index(@Query() query: PostQueryDTO) {
    const posts = await this.postService.getPosts(query);

    const result = {
      ...posts,
      entities: posts.entities.map(post => post.toPOJO()),
    }

    return fillDto(PostWithPaginationRDO, result);
  }
}
