import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class ReservaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    restauranteId: schema.number([
      rules.exists({ table: "restaurantes", column: "id" }),
    ]),
    clienteId: schema.number([
      rules.exists({ table: "clientes", column: "id" }),
    ]),
    dataHora: schema.date({ format: "yyyy-MM-dd HH:mm:ss" }),
    qtdPessoas: schema.number(),
  });
  public messages: CustomMessages = {};
}
