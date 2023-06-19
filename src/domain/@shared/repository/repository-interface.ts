export default interface RepositoryInterface<T> {
  create(entity: T): Promise<void>;
  update(entity: T): Promise<void>;
  getById(id: string): Promise<T>;
  getAll(): Promise<T[]>;
}
