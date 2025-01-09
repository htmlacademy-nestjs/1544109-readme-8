import { Model, Document } from 'mongoose';
import { NotFoundException } from '@nestjs/common';

import { Entity, EntityFactory, StorableEntity } from '@project/shared/core';
import { Repository } from './repository.interface';

export abstract class BaseMongoRepository<E extends Entity & StorableEntity<ReturnType<E['toPOJO']>>, D extends Document> implements Repository<E> {

  constructor(
    protected entityFactory: EntityFactory<E>,
    protected readonly model: Model<D>,
  ) {}


  protected createEntityFromDocument(document: D): E | null {
    if (!document) {
      return null;
    }

    const plainObject = document.toObject({ getters: true, versionKey: false, flattenObjectIds: true });

    return this.entityFactory.create(plainObject);
  }

  async findById(id: E['id']): Promise<E | null> {
    const document = await this.model.findById(id).exec();

    if (!document) {
      throw new NotFoundException(`Document with id ${id} not found`);
    }

    return this.createEntityFromDocument(document);
  }

  async save(entity: E): Promise<E | null> {
    const newDocument = await this.model.create(entity.toPOJO());

    const newEntity = this.createEntityFromDocument(newDocument);

    return newEntity;
  }

  async update(entity: E): Promise<void> {
    const updatedDocument = await this.model.findByIdAndUpdate(entity.id, entity.toPOJO() as E, { new: true}).exec();

    if (! updatedDocument) {
      throw new NotFoundException(`Entity with id ${entity.id} not found`);
    }
  }

  async deleteById(id: E['id']): Promise<void> {
    const deletedDocument = await this.model.findByIdAndDelete(id).exec();

    if (!deletedDocument) {
      throw new NotFoundException(`Entity with id ${id} not found.`);
    }
    
  }
}
