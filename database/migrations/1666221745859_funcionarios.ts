import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "funcionarios";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table
        .integer("restaurante_id", 50)
        .unsigned()
        .references("id")
        .inTable("restaurantes")
        .notNullable();
      table.string("nome").notNullable();
      table.string("cpf", 11).notNullable();
      table.date("data_de_nascimento").notNullable();
      table.string("endereco").notNullable();
      table.string("telefone").notNullable();
      table.string("email");

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
