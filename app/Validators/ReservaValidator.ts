import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class ReservaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    reservaId: schema.number([
      rules.exists({ table: "cliente", column: "id" }),
    ]),
    data_e_hora: schema.date(),
    qtd_de_pessoas: schema.number(),
  });

  public messages: CustomMessages = {};
}
