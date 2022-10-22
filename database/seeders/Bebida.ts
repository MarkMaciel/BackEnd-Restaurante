import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Bebida from "App/Models/Bebida";

export default class extends BaseSeeder {
  public async run() {
    await Bebida.createMany([
      {
        nome: "Long neck - Heineken",
        tipo: "Alcoolica",
        preco: "R$ 8,00",
      },
      {
        nome: "Moscow Mule",
        tipo: "Alcoolica",
        preco: "R$ 15,00",
      },
      {
        nome: "Suco de Maracúja",
        tipo: "Suco da fruta",
        preco: "R$ 7,00",
      },
      {
        nome: "Coca-cola 500ml",
        tipo: "Refrigerante",
        preco: "R$ 6,00",
      },
    ]);
  }
}
