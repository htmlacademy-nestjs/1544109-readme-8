import { ClassTransformOptions, plainToInstance } from 'class-transformer';

type PlainObject = Record<string, unknown>;

// NOTE: Function Overloads:
export function fillDto<T, V extends PlainObject>(
  DtoClass: new () => T,
  plainObject: V,
  options?: ClassTransformOptions,
): T;

export function fillDto<T, V extends PlainObject[]>(
  DtoClass: new () => T,
  plainObject: V,
  options?: ClassTransformOptions,
): T[];

export function fillDto<T, V extends PlainObject | PlainObject[]>(
  DtoClass: new () => T,
  plainObject: V,
  options?: ClassTransformOptions,
): T | T[] {
  return plainToInstance(DtoClass, plainObject, {
      excludeExtraneousValues: true,
      ...options,
  });
}


