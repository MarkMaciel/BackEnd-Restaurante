// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Bebida from "App/Models/Bebida";
import BebidaValidator from "App/Validators/BebidaValidator";

export default class BebidasController {
  async index() {
    return await Bebida.query();
  }

  async store({ request }) {
    const dados = await request.validate(BebidaValidator);
    return await Bebida.create(dados);
  }

  async show({ request }) {
    const id = await request.param("id");
    return await Bebida.findOrFail(id);
  }

  async destroy({ request }) {
    const id = await request.param("id");
    const bebida = await Bebida.findOrFail(id);
    return bebida.delete();
  }

  async update({ request }) {
    const id = await request.param("id");
    const bebida = await Bebida.findOrFail(id);

    const dados = await request.validate(BebidaValidator);

    await bebida.merge(dados).save();

    return bebida;
  }
}
