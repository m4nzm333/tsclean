export interface Mapper<T> {
  toPersistence(entity: T): any;
  toEntity(obj: any): T;
  toObject(entity: T): any;
}
