import { DateTime } from "luxon";
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  HasMany,
  hasMany,
} from "@ioc:Adonis/Lucid/Orm";
import Reserva from "./Reserva";
import Restaurante from "./Restaurante";

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public restauranteId: number;

  @column()
  public nome: string;

  @column()
  public cpf: string;

  @column()
  public email: string;

  @column()
  public telefone: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => Reserva)
  public reservas: HasMany<typeof Reserva>;

  @belongsTo(() => Restaurante)
  public restaurante: BelongsTo<typeof Restaurante>;
}
