import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Cliente from "App/Models/Cliente";

export default class extends BaseSeeder {
  public async run() {
    await Cliente.createMany([
      {
        restauranteId: 1,
        cpf: "06248753180",
        nome: "Marcos Maciel",
        email: "marcos.maciel2002@hotmail.com",
        telefone: "(61) 98146-7652",
      },
    ]);
  }
}
