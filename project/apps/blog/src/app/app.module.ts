import { Module } from '@nestjs/common';

import { ConfigurationModule } from '@project/blog/configuration';

@Module({
  imports: [
    ConfigurationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
