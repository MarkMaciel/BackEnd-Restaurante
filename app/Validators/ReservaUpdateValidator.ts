import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class ReservaUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    restauranteId: schema.number.optional([
      rules.exists({ table: "restaurantes", column: "id" }),
    ]),
    clienteId: schema.number.optional([
      rules.exists({ table: "clientes", column: "id" }),
    ]),
    dataHora: schema.date.optional({ format: "yyyy-MM-dd HH:mm:ss" }),
    qtdPessoas: schema.number.optional(),
  });
  public messages: CustomMessages = {};
}
