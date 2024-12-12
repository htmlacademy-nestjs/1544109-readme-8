import { ConflictException, Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { BlogUserEntity, BlogUserRepository } from '@project/account/blog-user';
import { CreateUserDTO } from './dto/create-user.dto';
import { AUTH_USER_EXISTS, AUTH_USER_NOT_FOUND, AUTH_USER_PASSWORD_WRONG } from './authentication.constant';
import { LoginUserDTO } from './dto/login-user.dto';
import { dbConfig } from '@project/account/configuration';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly blogUserRepository: BlogUserRepository,
    @Inject(dbConfig.KEY) private readonly databaseConfig: ConfigType<typeof dbConfig>,
  ) {
    console.log(databaseConfig.name);
    console.log(databaseConfig.password);
  }

  async register(dto: CreateUserDTO): Promise<BlogUserEntity> {
    const { email, firstName, lastName, password } = dto;

    const existUser = await this.blogUserRepository.findByEmail(email);

    if (existUser) {
      throw new ConflictException(AUTH_USER_EXISTS);
    }

    const newUser = {
      email,
      firstName,
      lastName,
      avatar: '',
      passwordHash: '',
    };

    const userEntity = await new BlogUserEntity(newUser).setPassword(password);

    this.blogUserRepository.save(userEntity);

    return userEntity;
  }

  async verifyUser(dto: LoginUserDTO) {
    const { email, password } = dto;

    const existUser = await this.blogUserRepository.findByEmail(email);

    if (!existUser) {
      throw new NotFoundException(AUTH_USER_NOT_FOUND);
    }

    if (!await existUser.comparePassword(password)) {
      throw new UnauthorizedException(AUTH_USER_PASSWORD_WRONG);
    }

    return existUser;
  }

  async getUserById(id: string) {
    const user = await this.blogUserRepository.findById(id);

    if (!user) {
      throw new NotFoundException(AUTH_USER_NOT_FOUND);
    }

    return user;
  }
}
