export interface RepositoryPort<T> {
  getAll(): Promise<T[]>
  getById(id: string): Promise<T>
  save(object: T): Promise<void>
  update(object: T): Promise<void>
}
