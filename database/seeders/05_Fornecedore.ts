import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Fornecedore from "App/Models/Fornecedore";

export default class extends BaseSeeder {
  public async run() {
    await Fornecedore.createMany([
      {
        restauranteId: 1,
        nome: "Friboi",
        cnpj: 11112222333344,
        localizacao: "São paulo",
      },
      {
        restauranteId: 1,
        nome: "Coca-cola",
        cnpj: 777777777777777,
        localizacao: "Rio de janeiro",
      },
      {
        restauranteId: 1,
        nome: "Lacta",
        cnpj: 5555555555555555,
        localizacao: "São paulo",
      },
    ]);
  }
}
