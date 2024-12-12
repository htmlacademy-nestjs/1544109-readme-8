import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class LoggedUserRDO {
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
    description: 'User\'s access token',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiJ9.H0c3xOk8rPhL3Q5XsVxwCdKyDOsTj77YvMd9XHa4JeU'
  })
  @Expose()
  accessToken!: string;
}
