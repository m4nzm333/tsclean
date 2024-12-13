export abstract class Entity<T> {
  protected readonly props?: T;

  constructor(props?: T) {
    this.props = props;
  }
}

export function getter(target: unknown, propertyKey: string) {
  let value: unknown;
  // Define getter for the property
  Object.defineProperty(target, propertyKey, {
    get() {
      return value;
    },
    set(newValue: unknown) {
      console.log(`Setting ${propertyKey} to: ${newValue}`);
      value = newValue;
    },
    enumerable: true,
    configurable: true,
  });
}

export function setter(target: unknown, propertyKey: string) {
  let value: unknown;
  // Define setter for the property
  Object.defineProperty(target, propertyKey, {
    get() {
      return value;
    },
    set(newValue: unknown) {
      console.log(`Setting ${propertyKey} to: ${newValue}`);
      value = newValue;
    },
    enumerable: true,
    configurable: true,
  });
}
