import { validate } from "class-validator";
import { CommandInterface } from "./CommandInterface";

export abstract class CommandAbstract<Request>
  implements CommandInterface<Request>
{
  async validate(req: Request) {
    const errors = await validate(req as object);
    if (errors.length > 0) {
      throw new Error(JSON.stringify(errors));
    }
  }
}
