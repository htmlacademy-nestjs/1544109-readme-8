import { ApiProperty } from '@nestjs/swagger';
import { Expose} from 'class-transformer';

import { Content, Type } from './../post.interface';

export class PostRDO {
  @ApiProperty({
    description: 'Post\'s unique id',
    example: '2stf1f77bcf86cd799439011'
  })
  @Expose()
  id!: string;

  @ApiProperty({
    type: String,
    description: 'Post\'s type',
    example: 'video'
  })
  @Expose()
  type!: Type;

  @ApiProperty({
    description: 'Post\'s likesQuantity',
    example: 10
  })
  @Expose()
  likesQuantity!: number;

  @ApiProperty({
    description: 'Post\'s commentsQuantity',
    example: 5
  })
  @Expose()
  commentsQuantity!: number;

  @ApiProperty({
    description: 'Post\'s user\'s unique id',
    example: '507f1f77bcf86cd799439011'
  })
  @Expose()
  userId!: string;

  //TODO: add for all; FIXME:
  @ApiProperty({
    type: Object,
    description: 'Post\'s content, depends on post\'s type',
    examples: [
      {
        video: {
          value: {
            title: 'Animals',
            link: 'www.youtube/animals',
            tags: '[tag1, tag2, tag3]'
          }
        }
      },
      {
        text: {
          value: {
            title: 'Animals',
            preview: 'It is a post about animals...',
            text: 'It is a very interesting post about animals...',
            tags: '[tag1, tag2, tag3]'
          }
        }
      },
    ]
  })
  @Expose()
  content!: Content;
}
