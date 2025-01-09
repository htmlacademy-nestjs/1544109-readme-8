import { Sort } from '@project/shared/core';
import { Transform } from 'class-transformer';
import { IsIn, IsMongoId, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from '../post.interface';

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 25;
const DEFAULT_SORT = Sort.Date;

export class PostQueryDTO {
  @Transform(({ value }) => +value || DEFAULT_PAGE)
  @IsNumber({}, { message: 'page must be a number'})
  @IsOptional()
  page = DEFAULT_PAGE;

  @Transform(({ value }) => +value || DEFAULT_LIMIT)
  @IsNumber({}, { message: 'limit must be a number'})
  @IsOptional()
  limit = DEFAULT_LIMIT;

  @IsIn(Object.values(Sort), { message: 'sort must be a value from Sort enum'})
  @IsOptional()
  sort = DEFAULT_SORT;

  @IsMongoId({ message: 'authorId must be a valid Mongo id'})
  @IsOptional()
  authorId?: string;

  @IsIn(Object.values(Type), { message: 'type must be a value from Type enum'})
  @IsOptional()
  type?: Type;

  @IsString({ message: 'tag must be a string'})
  @IsOptional()
  tag?: string;
}
