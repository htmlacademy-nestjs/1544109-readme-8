import { Document } from 'mongoose';
import { AuthUser } from '../../../../shared/core/src';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  collection: 'accounts',
  timestamps: true,
})
export class BlogUserModel extends Document implements AuthUser {
  @Prop()
  email!: string;

  @Prop()
  firstName!: string;

  @Prop()
  lastName!: string;

  @Prop()
  avatar!: string;

  @Prop()
  passwordHash!: string;
}

export const BlogUserSchema = SchemaFactory.createForClass(BlogUserModel);
