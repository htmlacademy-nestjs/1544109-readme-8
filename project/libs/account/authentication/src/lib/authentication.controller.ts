import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { LoginUserDTO } from './dto/login-user.dto';

@Controller('auth')
export class AuthenticationController {
  constructor(
    private readonly authService: AuthenticationService,
  ) {}

  @Post('register')
  async create(@Body() dto: CreateUserDTO) {
    const user = await this.authService.register(dto);

    return user.toPOJO();
  }

  @Post('login')
  async login(@Body() dto: LoginUserDTO) {
    const verifiedUser = await this.authService.verifyUser(dto);
    
    return verifiedUser.toPOJO();
  }

  @Get(':id')
  async show(@Param('id') id: string) {
    const existUser = await this.authService.getUserById(id);

    return existUser.toPOJO();
  }

}
