import { randomUUID } from 'node:crypto';

import { Entity, StorableEntity, EntityFactory } from '@project/shared/core';
import { Repository } from './repository.interface';


export abstract class BaseMemoryRepository<E extends Entity & StorableEntity<ReturnType<E['toPOJO']>>> implements Repository<E> {
  protected entities: Map<E['id'], ReturnType<E['toPOJO']>> = new Map(); // NOTE: Map

  constructor(
    protected entityFactory: EntityFactory<E>,
  ) {}

  async findById(id: E['id']): Promise<E | null> {
    const entity = this.entities.get(id) || null;

    if (!entity) {
      return null;
    }

    return this.entityFactory.create(entity);
  }

  async save(entity: E): Promise<void> {
    if (!entity.id) {
      entity.id = randomUUID();
    }

    this.entities.set(entity.id, entity.toPOJO());
  }

  async update(entity: E): Promise<void> {
    if (!this.entities.has(entity.id)) {
      throw new Error('Entity not found');
    }

    this.entities.set(entity.id, entity.toPOJO());
  }

  async deleteById(id: E['id']): Promise<void> {
    if (!this.entities.has(id)) {
      throw new Error('Entity not found');
    }

    this.entities.delete(id);
  }
}
