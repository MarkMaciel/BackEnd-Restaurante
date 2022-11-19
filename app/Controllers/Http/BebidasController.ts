// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Bebida from "App/Models/Bebida";
import BebidaUpdateValidator from "App/Validators/BebidaUpdateValidator";
import BebidaValidator from "App/Validators/BebidaValidator";

export default class BebidasController {
  async index() {
    return await Bebida.query().preload("restaurante");
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
    bebida.delete();
    return "Bebida excluida com sucesso";
  }

  async update({ request }) {
    const id = await request.param("id");
    const bebida = await Bebida.findOrFail(id);

    const dados = await request.validate(BebidaUpdateValidator);

    await bebida.merge(dados).save();

    return bebida;
  }
}
