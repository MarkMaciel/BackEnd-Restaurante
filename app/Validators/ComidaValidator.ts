import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class ComidaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.alpha({ allow: ["space", "dash"] }),
      rules.maxLength(50),
      rules.unique({ table: "comidas", column: "nome" }),
    ]),
  });

  public messages: CustomMessages = {};
}
