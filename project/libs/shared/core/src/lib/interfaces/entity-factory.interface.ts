import { StorableEntity } from './storable-entity.interface';

// NOTE: factory will create instances of an entity from their plain object representation
// NOTE: E(ntity) - has more properties that P(ojo) 
// NOTE: POJO - Plain Old Java Object

export interface EntityFactory<E extends StorableEntity<ReturnType<E['toPOJO']>>> {
  create(POJO: ReturnType<E['toPOJO']>): E;
}

// EntityFactory is about recreating the entity from that plain object

// EntityFactory<E>: A factory that creates entities from their plain object representations