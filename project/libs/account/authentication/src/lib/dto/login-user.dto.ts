import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDTO {
  @ApiProperty({
    description: 'User\'s email address',
    example: 'user@gmail.com'
  })
  email!: string;

  @ApiProperty({
    description: 'User\'s password',
    example: '123123'
  })
  password!: string;
}
