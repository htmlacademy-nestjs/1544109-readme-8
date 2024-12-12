import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserRDO {
  @ApiProperty({
    description: 'User\'s unique id',
    example: '507f1f77bcf86cd799439011'
  })
  @Expose()
  id!: string;

  @ApiProperty({
    description: 'User\'s email address',
    example: 'user@gmail.com'
  })
  @Expose()
  email!: string;

  @ApiProperty({
    description: 'User\'s first name',
    example: 'Tom'
  })
  @Expose()
  firstName!: string;

  @ApiProperty({
    description: 'User\'s last name',
    example: 'Cruise'
  })
  @Expose()
  lastName!: string;

  @ApiProperty({
    description: 'User\'s avatar',
    example: 'tom.jpg'
  })
  @Expose()
  avatar!: string;
}
