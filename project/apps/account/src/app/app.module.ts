import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthenticationModule } from '@project/account/authentication';
import { BlogUserModule } from '@project/account/blog-user';
import { ConfigurationModule, getMongooseOptions } from '@project/account/configuration';

@Module({
  imports: [
    ConfigurationModule,
    AuthenticationModule,
    BlogUserModule,
    MongooseModule.forRootAsync(
      getMongooseOptions()
    )
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
