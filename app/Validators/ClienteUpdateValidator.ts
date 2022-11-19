import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class ClienteUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    restauranteId: schema.number.optional([
      rules.exists({ table: "restaurantes", column: "id" }),
    ]),
    nome: schema.string.optional([rules.maxLength(100)]),
    cpf: schema.string.optional([
      rules.regex(/^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/),
      rules.unique({ table: "clientes", column: "cpf" }),
    ]),
    telefone: schema.string.optional([
      rules.range(11, 15),
      rules.mobile({ locale: ["pt-BR"] }),
      rules.unique({ table: "clientes", column: "telefone" }),
    ]),
    email: schema.string.optional([
      rules.email(),
      rules.maxLength(100),
      rules.unique({ table: "clientes", column: "email" }),
    ]),
  });
  public messages: CustomMessages = {};
}
