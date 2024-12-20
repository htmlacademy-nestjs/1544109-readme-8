import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class TextRDO {
  @ApiProperty({
    description: "Text's title",
    example: 'Ocean Fishes',
  })
  @Expose()
  title!: string;

  @ApiProperty({
    description: "Text's preview",
    example: 'The ocean contains an incredible amount of life... ',
  })
  @Expose()
  preview!: string;

  @ApiProperty({
    description: "Text's text",
    example: 'The ocean contains an incredible amount of life. Here we’ll give you a list of 43 species of fish you can find living in the ocean, both in coastal waters, out in open waters, and in deep sea.',
  })
  @Expose()
  text!: string;

  @ApiProperty({
    required: false,
    type: [String],
    description: "Text's tags",
    example: '[tag1, tag2, tag3]',
  })
  @Expose()
  tags?: string[];
}
