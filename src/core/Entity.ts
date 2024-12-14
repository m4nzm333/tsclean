export abstract class Entity<T> {
  protected readonly props?: T;

  constructor(props?: T) {
    this.props = props;
  }

  toJSON(): T | undefined {
    return this.props;
  }

  toString(): string | undefined {
    return this.props?.toString();
  }
}
