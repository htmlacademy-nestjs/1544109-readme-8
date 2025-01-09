import { IsMongoId, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCommentDTO {
  @IsString({ message: 'Field comment must be a string' })
  @IsNotEmpty({ message: 'Field comment is required' })
  @MinLength(10, { message: 'Minimum comment length must be 10' })
  @MaxLength(300, { message: 'Maximum comment length must be 300' })
  text!: string;

  @IsString({ message: 'Field postId must be a string' })
  @IsNotEmpty({ message: 'Field postId is required' })
  @IsMongoId({ message: 'Field postId must be a valid MongoDB ObjectId' })
  postId!: string;

  //TODO: FIXME: should be gotten automatically
  @IsString({ message: 'Field userId must be a string' })
  @IsNotEmpty({ message: 'Field userId is required' })
  @IsMongoId({ message: 'Field userId must be a valid MongoDB ObjectId' })
  userId!: string;
}
