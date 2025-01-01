export interface PaginateResult<T> {
  total: number;
  totalFiltered: number;
  length: number;
  page: number;
  data: T[];
}
