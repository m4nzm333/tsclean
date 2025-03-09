export interface Repository<T> {
  save(data: T): Promise<T>;
  find(id: string): Promise<T | null>;
  findOne(query: any): Promise<T | null>;
  findByQuery(query: any): Promise<Array<T>>;
  delete(id: string): Promise<T | null>;
}
