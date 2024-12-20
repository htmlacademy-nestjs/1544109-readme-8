import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Content, Post, Type } from './post.interface';

@Schema({
  collection: 'posts',
  timestamps: true,
})
export class PostModel extends Document implements Post {
  @Prop({
    type: () => String,
    enum: Type,
  })
  type!: Type;

  @Prop()
  likesQuantity!: number;

  @Prop()
  commentsQuantity!: number;

  @Prop()
  userId!: string;

  @Prop({
    type: () => Object,
  })
  content!: Content;
}

export const PostSchema = SchemaFactory.createForClass(PostModel);
