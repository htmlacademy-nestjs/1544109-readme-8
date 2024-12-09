import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
  @ApiProperty({
    description: 'User\'s email address',
    example: 'user@gmail.com'
  })
  email!: string;

  @ApiProperty({
    description: 'User\'s first name',
    example: 'Tom'
  })
  firstName!: string;

  @ApiProperty({
    description: 'User\'s last name',
    example: 'Cruise'
  })
  lastName!: string;

  @ApiProperty({
    description: 'User\'s password',
    example: '123123'
  })
  password!: string;
}
