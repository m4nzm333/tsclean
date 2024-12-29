import { singleton } from "tsyringe";
import { Sequelize } from "@sequelize/core";
import { SqliteDialect } from "@sequelize/sqlite3";

@singleton()
export class SQLiteDriver {
  sequilize: Sequelize;
  async init(location: string, models: Array<any>) {
    this.sequilize = new Sequelize({
      dialect: SqliteDialect,
      storage: location,
      models: models,
    });
    await this.sequilize.sync();
  }

  async get() {
    return this.sequilize;
  }

  async close() {
    await this.sequilize.close();
  }

  async execute(query: string) {
    return await this.sequilize.query(query);
  }
}
