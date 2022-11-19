import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class RestauranteUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string.optional([rules.maxLength(100)]),
    localizacao: schema.string.optional([rules.maxLength(100), rules.alpha()]),
  });
  public messages: CustomMessages = {};
}
