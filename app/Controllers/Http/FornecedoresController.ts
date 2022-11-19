// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Fornecedore from "App/Models/Fornecedore";
import FornecedorUpdateValidator from "App/Validators/FornecedorUpdateValidator";
import FornecedorValidator from "App/Validators/FornecedorValidator";

export default class FornecedoresController {
  async index() {
    return await Fornecedore.query().preload("restaurante");
  }

  async store({ request }) {
    const dados = await request.validate(FornecedorValidator);
    return await Fornecedore.create(dados);
  }

  async show({ request }) {
    const id = await request.param("id");
    return await Fornecedore.findOrFail(id);
  }

  async destroy({ request }) {
    const id = await request.param("id");
    const fornecedor = await Fornecedore.findOrFail(id);
    fornecedor.delete();

    return "Fornecedor excluido com sucesso";
  }

  async update({ request }) {
    const id = await request.param("id");
    const fornecedor = await Fornecedore.findOrFail(id);

    const dados = await request.validate(FornecedorUpdateValidator);

    await fornecedor.merge(dados).save();

    return fornecedor;
  }
}
