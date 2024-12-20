import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class LinkRDO {
  @ApiProperty({
    description: "Link's link",
    example: 'www.some-cool.place/home',
  })
  @Expose()
  link!: string;

  @ApiProperty({
    description: "Link's description",
    example: 'This is a link to...',
  })
  @Expose()
  description!: string;

  @ApiProperty({
    required: false,
    type: [String],
    description: "Link's tags",
    example: '[tag1, tag2, tag3]',
  })
  @Expose()
  tags?: string[];
}