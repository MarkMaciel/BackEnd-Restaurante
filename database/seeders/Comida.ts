import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Comida from "App/Models/Comida";

export default class extends BaseSeeder {
  public async run() {
    await Comida.createMany([
      {
        nome: "Parmegiana",
        preco: "R$ 45,00",
      },
      {
        nome: "Salada temperada",
        preco: "R$ 25,00",
      },
      {
        nome: "Petit gateau",
        preco: "R$ 20,00",
      },
    ]);
  }
}
