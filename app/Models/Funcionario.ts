import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Restaurante from "./Restaurante";

export default class Funcionario extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public nome: string;

  @column()
  public cpf: number;

  @column()
  public dataDeNascimento: Date;

  @column()
  public endereco: string;

  @column()
  public telefone: string;

  @column()
  public email: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Restaurante)
  public restaurante: BelongsTo<typeof Restaurante>;
}
