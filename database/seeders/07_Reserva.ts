import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Reserva from "App/Models/Reserva";

export default class extends BaseSeeder {
  public async run() {
    await Reserva.createMany([
      {
        restauranteId: 1,
        clienteId: 1,
        dataHora: new Date(2022, 12, 28, 20, 0, 0),
      },
    ]);
  }
}
