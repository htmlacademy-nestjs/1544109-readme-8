import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class VideoRDO {
  @ApiProperty({
    description: "Video's title",
    example: 'Wild animals for kids',
  })
  @Expose()
  title!: string;

  @ApiProperty({
    description: "Video's link",
    example: 'https://www.youtube.com/watch?v=123854697',
  })
  @Expose()
  link!: string;

  @ApiProperty({
    required: false,
    type: [String],
    description: "Video's tags",
    example: '[tag1, tag2, tag3]',
  })
  @Expose()
  tags?: string[];
}
