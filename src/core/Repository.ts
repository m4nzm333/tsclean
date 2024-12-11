export default interface Repository<T> {
  save(data: T): Promise<T>;
  find(id: string): Promise<T>;
  findOne(query: any): Promise<T>;
}
