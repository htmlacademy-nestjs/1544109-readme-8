import { Controller, Get, HttpStatus } from '@nestjs/common';
import { PostService } from './post.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { fillDto } from '@project/shared/helpers';
import { PostRDO } from './rdo/post.rdo';

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
  // TODO: async index(@Query() query: BlogPostQuery) {
  async index() {
    const results = await this.postService.getPosts();

    const posts = results.map((result: any) => result.toPOJO());

    return fillDto(PostRDO, posts);
  }
}
