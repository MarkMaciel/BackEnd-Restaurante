// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Funcionario from "App/Models/Funcionario";
import FuncionarioUpdateValidator from "App/Validators/FuncionarioUpdateValidator";
import FuncionarioValidator from "App/Validators/FuncionarioValidator";

export default class FuncionariosController {
  async index() {
    return await Funcionario.query().preload("restaurante");
  }

  async store({ request }) {
    const dados = await request.validate(FuncionarioValidator);
    return await Funcionario.create(dados);
  }

  async show({ request }) {
    const id = await request.param("id");
    return await Funcionario.findOrFail(id);
  }

  async destroy({ request }) {
    const id = await request.param("id");
    const funcionario = await Funcionario.findOrFail(id);
    funcionario.delete();
    return "Funcionario excluido com sucesso";
  }

  async update({ request }) {
    const id = await request.param("id");
    const funcionario = await Funcionario.findOrFail(id);

    const dados = await request.validate(FuncionarioUpdateValidator);

    await funcionario.merge(dados).save();

    return funcionario;
  }
}
