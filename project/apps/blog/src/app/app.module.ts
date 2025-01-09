import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ConfigurationModule, getMongooseOptions } from '@project/blog/configuration';
import { PostModule } from '@project/blog/post';
import { CommentModule } from '@project/blog/comment';

@Module({
  imports: [
    ConfigurationModule,
    MongooseModule.forRootAsync(
      getMongooseOptions()
    ),
    PostModule,
    CommentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
