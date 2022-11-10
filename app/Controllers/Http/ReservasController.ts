// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Reserva from "App/Models/Reserva";
import ReservaValidator from "App/Validators/ReservaValidator";

export default class ReservasController {
  async index() {
    return await Reserva.query().preload("cliente");
  }

  async store({ request }) {
    const dados = await request.validate(ReservaValidator);
    return await Reserva.create(dados);
  }

  async show({ request }) {
    const id = await request.param("id");
    return await Reserva.findOrFail(id);
  }

  async destroy({ request }) {
    const id = await request.param("id");
    const reserva = await Reserva.findOrFail(id);
    return reserva.delete();
  }

  async update({ request }) {
    const id = await request.param("id");
    const reserva = await Reserva.findOrFail(id);

    const dados = await request.validate(ReservaValidator);

    await reserva.merge(dados).save();

    return reserva;
  }
}
