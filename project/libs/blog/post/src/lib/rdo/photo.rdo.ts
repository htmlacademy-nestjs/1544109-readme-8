import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class PhotoRDO {
  @ApiProperty({
    description: "Photo's photo",
    example: 'photo.png',
  })
  @Expose()
  photo!: string;

  @ApiProperty({
    required: false,
    type: [String],
    description: "Photo's tags",
    example: '[tag1, tag2, tag3]',
  })
  @Expose()
  tags?: string[];
}
