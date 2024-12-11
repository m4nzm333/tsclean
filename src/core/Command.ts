export interface Command<Request, Response> {
  execute(req?: Request): Response;
}
