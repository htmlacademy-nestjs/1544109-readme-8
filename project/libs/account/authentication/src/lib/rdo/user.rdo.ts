import { Expose } from 'class-transformer';

export class UserRDO {
  @Expose()
  id!: string;

  @Expose()
  email!: string;

  @Expose()
  firstName!: string;

  @Expose()
  lastName!: string;

  @Expose()
  avatar!: string;
}
