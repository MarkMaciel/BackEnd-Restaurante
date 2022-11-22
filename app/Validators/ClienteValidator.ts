import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class ClienteValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    restauranteId: schema.number([
      rules.exists({ table: "restaurantes", column: "id" }),
    ]),
    nome: schema.string([rules.maxLength(100)]),
    cpf: schema.string([
      rules.regex(/^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/),
      rules.unique({ table: "clientes", column: "cpf" }),
    ]),
    telefone: schema.string([
      rules.maxLength(100),
      rules.mobile({ locale: ["pt-BR"] }),
      rules.unique({ table: "clientes", column: "telefone" }),
    ]),
    email: schema.string([
      rules.email(),
      rules.maxLength(100),
      rules.unique({ table: "clientes", column: "email" }),
    ]),
  });

  public messages: CustomMessages = {};
}
