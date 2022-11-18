export default interface RepositoryInterface<T> {
  create(entity: T): Promise<void>;
  update(entity: T): Promise<void>;
  get_by_id(id: string): Promise<T>;
  getAll(): Promise<T[]>;
}
