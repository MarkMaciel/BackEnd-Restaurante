import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "fornecedores";

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
      table.integer("cnpj", 14).notNullable();
      table.string("localizacao");

      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
