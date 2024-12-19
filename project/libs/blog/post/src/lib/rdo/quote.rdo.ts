import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class QuoteRDO {
  @ApiProperty({
    description: "Quote's text",
    example: 'The only impossible journey is the one you never begin.',
  })
  @Expose()
  text!: string;

  @ApiProperty({
    description: "Quote's author",
    example: 'Tony Robbins',
  })
  @Expose()
  author!: string;

  @ApiProperty({
    required: false,
    type: [String],
    description: "Quote's tags",
    example: '[tag1, tag2, tag3]',
  })
  @Expose()
  tags?: string[];
}