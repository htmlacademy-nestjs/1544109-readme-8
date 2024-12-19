import { ApiExtraModels, ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { Expose} from 'class-transformer';

import { Content, Type } from './../post.interface';
import { VideoRDO } from './video.rdo';
import { TextRDO } from './text.rdo';
import { QuoteRDO } from './quote.rdo';
import { PhotoRDO } from './photo.rdo';
import { LinkRDO } from './link.rdo';

@ApiExtraModels(VideoRDO)
@ApiExtraModels(TextRDO)
@ApiExtraModels(QuoteRDO)
@ApiExtraModels(PhotoRDO)
@ApiExtraModels(LinkRDO)
export class PostRDO {
  @ApiProperty({
    description: 'Post\'s unique id',
    example: '2stf1f77bcf86cd799439011'
  })
  @Expose()
  id!: string;

  @ApiProperty({
    enum: Type, enumName: 'Type',
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

  @ApiProperty({
    description: 'Post\'s content, DEPENDS ON post\'s type',
    type: String,
    oneOf: [
      { $ref: getSchemaPath(VideoRDO) },
      { $ref: getSchemaPath(TextRDO) },
      { $ref: getSchemaPath(QuoteRDO) },
      { $ref: getSchemaPath(PhotoRDO) },
      { $ref: getSchemaPath(LinkRDO) },
    ],
  })
  @Expose()
  content!: Content;
}
