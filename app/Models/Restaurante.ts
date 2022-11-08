import { DateTime } from "luxon";
import { BaseModel, column, hasMany, HasMany } from "@ioc:Adonis/Lucid/Orm";
import Cliente from "./Cliente";
import Funcionario from "./Funcionario";
import Fornecedore from "./Fornecedore";

export default class Restaurante extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public nome: string;

  @column()
  public localizacao: string;

  @column()
  public tipo: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => Cliente)
  public clientes: HasMany<typeof Cliente>;

  @hasMany(() => Funcionario)
  public funcionarios: HasMany<typeof Funcionario>;

  @hasMany(() => Fornecedore)
  public fornecedores: HasMany<typeof Fornecedore>;
}
