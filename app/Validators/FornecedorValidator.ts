import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class FornecedorValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    restauranteId: schema.number.optional([
      rules.exists({ table: "restaurantes", column: "id" }),
    ]),
    nome: schema.string([rules.maxLength(100)]),
    cnpj: schema.string([
      rules.regex(/^[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}$/),
      rules.unique({ table: "fornecedores", column: "cnpj" }),
    ]),
    localizacao: schema.string([rules.maxLength(100), rules.alpha()]),
  });

  public messages: CustomMessages = {};
}
