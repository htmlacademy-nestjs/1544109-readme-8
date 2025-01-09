import { Expose } from 'class-transformer';

export class CommentRDO {
  @Expose()
  id!: string;

  @Expose()
  text!: string;

  @Expose()
  postId!: string;

  @Expose()
  userId!: string;

  @Expose()
  createdAt!: string;
}
