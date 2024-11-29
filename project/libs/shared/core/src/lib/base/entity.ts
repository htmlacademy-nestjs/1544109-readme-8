export abstract class Entity {
  private _id = '';

  // NOTE: Getters and Setters
  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }
}
