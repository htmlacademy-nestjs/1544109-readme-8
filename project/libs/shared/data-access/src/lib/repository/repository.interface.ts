import { Entity } from '@project/shared/core';

export interface Repository<E extends Entity> {
  findById(id: E['id']): Promise<E | null>;
  save(entity: E): Promise<void>;
  update(entity: E): Promise<void>;
  deleteById(id: E['id']): Promise<void>;
}
