// NOTE: POJO - plain old Java object
export interface StorableEntity<P> {
  toPOJO(): P;
}

// StorableEntity is about converting an entity to a plain object

// StorableEntity<P>: An interface for entities that can convert themselves into a plain object (POJO)