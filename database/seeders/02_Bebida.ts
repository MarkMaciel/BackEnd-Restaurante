import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Bebida from "App/Models/Bebida";

export default class extends BaseSeeder {
  public async run() {
    await Bebida.createMany([
      {
        restauranteId: 1,
        nome: "Long neck - Heineken",
        preco: "R$ 8,00",
      },
      {
        restauranteId: 1,
        nome: "Moscow Mule",
        preco: "R$ 15,00",
      },
      {
        restauranteId: 1,
        nome: "Suco de Maracúja",
        preco: "R$ 7,00",
      },
      {
        restauranteId: 1,
        nome: "Coca-cola 500ml",
        preco: "R$ 6,00",
      },
    ]);
  }
}
