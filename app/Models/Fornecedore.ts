import { DateTime } from "luxon";
import { BaseModel, column, HasMany, hasMany } from "@ioc:Adonis/Lucid/Orm";
import Restaurante from "./Restaurante";

export default class Fornecedore extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public restauranteId: number;

  @column()
  public nome: string;

  @column()
  public cnpj: number;

  @column()
  public localizacao: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => Restaurante)
  public restaurantes: HasMany<typeof Restaurante>;
}
