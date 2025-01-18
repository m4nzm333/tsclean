export interface PaginateResponsePayload {
  status: {
    code: number;
    message: string;
  };
  data: Array<any>;
  total: number;
  totalFiltered: number;
  page: number;
  totalPage: number;
  limit: number;
  offset: number;
}
