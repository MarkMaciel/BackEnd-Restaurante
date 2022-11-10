// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Comida from "App/Models/Comida";
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
    return comida.delete();
  }

  async update({ request }) {
    const id = await request.param("id");
    const comida = await Comida.findOrFail(id);

    const dados = await request.validate(ComidaValidator);

    await comida.merge(dados).save();

    return comida;
  }
}
