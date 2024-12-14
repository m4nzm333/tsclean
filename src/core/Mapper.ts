export interface Mapper<T> {
  toEntity(obj: any): T;
  toObject(entity: T): any;
}
