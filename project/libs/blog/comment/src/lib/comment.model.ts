import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Comment } from './comment.interface';

@Schema({
  collection: 'comments',
  timestamps: true,
})
export class CommentModel extends Document implements Comment {
  @Prop()
  text!: string;

  @Prop()
  postId!: string;

  @Prop()
  userId!: string;
}

export const CommentSchema = SchemaFactory.createForClass(CommentModel);
