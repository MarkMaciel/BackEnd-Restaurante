import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class FuncionarioValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    restauranteId: schema.number(),
    nome: schema.string([rules.maxLength(100)]),
    cpf: schema.string([
      rules.regex(/^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/),
      rules.unique({ table: "funcionarios", column: "cpf" }),
    ]),
    dataDeNascimento: schema.date.optional(),
    endereco: schema.string.optional([rules.maxLength(100)]),
    telefone: schema.string([
      rules.maxLength(15),
      rules.unique({ table: "funcionarios", column: "telefone" }),
    ]),
    email: schema.string([
      rules.email(),
      rules.maxLength(100),
      rules.unique({ table: "funcionarios", column: "email" }),
    ]),
  });

  public messages: CustomMessages = {};
}
