import { Entity, StorableEntity, AuthUser } from '@project/shared/core';

export class BlogUserEntity extends Entity implements StorableEntity<AuthUser> {
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  passwordHash: string;

  constructor(user: AuthUser) {
    super();

    this.id = user.id || ''; // NOTE: calling setter from abstract class Entity
    this.email = user.email;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.avatar = user.avatar;
    this.passwordHash = user.passwordHash;
  }

  toPOJO(): AuthUser {
    return {
      id: this.id,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      avatar: this.avatar,
      passwordHash: this.passwordHash,
    }
  }
}