import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class BebidaUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string.optional([
      rules.alpha({ allow: ["space", "dash"] }),
      rules.maxLength(50),
      rules.unique({ table: "bebidas", column: "nome" }),
    ]),
    preco: schema.string.optional([]),
    restauranteId: schema.number.optional([
      rules.exists({ table: "bebidas", column: "id" }),
    ]),
  });

  public messages: CustomMessages = {};
}
