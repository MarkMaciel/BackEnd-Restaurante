import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Comida from "App/Models/Comida";

export default class extends BaseSeeder {
  public async run() {
    await Comida.createMany([
      {
        nome: "Parmegiana",
        tipo: "Prato Principal",
        preco: "R$ 45,00",
      },
      {
        nome: "Salada temperada",
        tipo: "Entrada",
        preco: "R$ 25,00",
      },
      {
        nome: "Petit gateau",
        tipo: "Sobremesa",
        preco: "R$ 20,00",
      },
    ]);
  }
}
