// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Restaurante from "App/Models/Restaurante";
import RestauranteValidator from "App/Validators/RestauranteValidator";

export default class RestaurantesController {
  async index() {
    return await Restaurante.query()
      .preload("clientes")
      .preload("comidas")
      .preload("bebidas")
      .preload("fornecedores")
      .preload("funcionarios");
  }

  async store({ request }) {
    const dados = await request.validate(RestauranteValidator);
    return await Restaurante.create(dados);
  }

  async show({ request }) {
    const id = await request.param("id");
    return await Restaurante.findOrFail(id);
  }

  async destroy({ request }) {
    const id = await request.param("id");
    const restaurante = await Restaurante.findOrFail(id);
    restaurante.delete();
    return "Restaurante excluido com sucesso";
  }

  async update({ request }) {
    const id = await request.param("id");
    const restaurante = await Restaurante.findOrFail(id);

    const dados = await request.validate(RestauranteValidator);

    await restaurante.merge(dados).save();

    return restaurante;
  }
}
