import { Entity, StorableEntity } from '@project/shared/core';

import { Comment } from './comment.interface';

export class CommentEntity extends Entity implements StorableEntity<Comment> {
  text!: string;
  postId!: string;
  userId!: string;
  createdAt!: string;

  constructor(comment?: Comment) {
    super();

    this.populate(comment);
  }

  toPOJO(): Comment {
    return {
      id: this.id,
      text: this.text,
      postId: this.postId,
      userId: this.userId,
      createdAt: this.createdAt,
    }
  }

  private populate(comment?: Comment) {
    console.log('populate')
    console.log(comment)
    if (!comment) {
      return;
    }

    this.id = comment.id || '';
    this.text = comment.text;
    this.postId = comment.postId;
    this.userId = comment.userId;
    this.createdAt = comment.createdAt || '';
  }
}
