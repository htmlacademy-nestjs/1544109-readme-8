import { Entity, StorableEntity } from '@project/shared/core';

import { Content, Post, Type } from './post.interface';

export class PostEntity extends Entity implements StorableEntity<Post> {
  type!: Type;
  likesQuantity!: number;
  commentsQuantity!: number;
  userId!: string;
  content!: Content;

  constructor(post?: Post) {
    super();

    this.populate(post);
  }

  toPOJO(): Post {
    return {
      id: this.id,
      type: this.type,
      likesQuantity: this.likesQuantity,
      commentsQuantity: this.commentsQuantity,
      userId: this.userId,
      content: this.content,
    }
  }

  private populate(post?: Post) {
    if (!post) {
      return;
    }

    this.id = post.id || '';
    this.type = post.type;
    this.likesQuantity = post.likesQuantity;
    this.commentsQuantity = post.commentsQuantity;
    this.userId = post.userId;
    this.content = post.content;
  }
}