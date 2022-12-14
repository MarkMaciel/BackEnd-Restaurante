// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Comida from "App/Models/Comida";
import ComidaUpdateValidator from "App/Validators/ComidaUpdateValidator";
import ComidaValidator from "App/Validators/ComidaValidator";

export default class ComidasController {
  async index() {
    return await Comida.query().preload("restaurante");
  }

  async store({ request }) {
    const dados = await request.validate(ComidaValidator);
    return await Comida.create(dados);
  }

  async show({ request }) {
    const id = await request.param("id");
    return await Comida.findOrFail(id);
  }

  async destroy({ request }) {
    const id = await request.param("id");
    const comida = await Comida.findOrFail(id);
    comida.delete();
    return "Comida excluida com sucesso";
  }

  async update({ request }) {
    const id = await request.param("id");
    const comida = await Comida.findOrFail(id);

    const dados = await request.validate(ComidaUpdateValidator);

    await comida.merge(dados).save();

    return comida;
  }
}
