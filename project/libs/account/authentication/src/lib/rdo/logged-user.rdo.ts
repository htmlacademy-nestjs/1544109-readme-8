import { Expose } from 'class-transformer';

export class LoggedUserRDO {
  @Expose()
  id!: string;

  @Expose()
  email!: string;

  @Expose()
  accessToken!: string;
}
