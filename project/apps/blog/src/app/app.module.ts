import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ConfigurationModule, getMongooseOptions } from '@project/blog/configuration';
import { PostModule } from '@project/blog/post';

@Module({
  imports: [
    ConfigurationModule,
    MongooseModule.forRootAsync(
      getMongooseOptions()
    ),
    PostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
