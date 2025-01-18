export interface ResponsePayload {
  status: {
    code: number;
    message: string;
  };
  data?: any;
}
