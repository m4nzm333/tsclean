export interface CommandInterface<Request> {
  validate(req: Request): void;
}
