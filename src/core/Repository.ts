export interface Repository<T> {
  save(data: T): Promise<T>;
  find(id: string): Promise<T>;
  findOne(query: any): Promise<T>;
  findByQuery(query: any): Promise<Array<T>>;
  delete(id: string): Promise<T>;
}
