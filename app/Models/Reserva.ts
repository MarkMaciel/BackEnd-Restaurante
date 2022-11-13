import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Cliente from "./Cliente";

export default class Reserva extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public restauranteId: number;

  @column()
  public clienteId: number;

  @column()
  public dataHora: Date;

  @column()
  public qtdPessoas: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Cliente)
  public cliente: BelongsTo<typeof Cliente>;
}
