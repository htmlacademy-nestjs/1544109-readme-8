import { Module } from '@nestjs/common';
import { AuthenticationModule } from '@project/account/authentication';
import { BlogUserModule } from '@project/account/blog-user';
import { ConfigurationModule } from '@project/account/configuration';

@Module({
  imports: [
    ConfigurationModule,
    AuthenticationModule,
    BlogUserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
