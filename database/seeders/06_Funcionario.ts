import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Funcionario from "App/Models/Funcionario";

export default class extends BaseSeeder {
  public async run() {
    await Funcionario.createMany([
      {
        restauranteId: 1,
        nome: "Maciel",
        cpf: "89575986598",
        dataDeNascimento: new Date(2002, 1, 19),
        endereco: "Setor O - Ceilândia norte",
        telefone: "+55061981467652",
        email: "maciel.distribuição@gmail.com",
      },
      {
        restauranteId: 1,
        nome: "Mendes",
        cpf: "15426548231",
        dataDeNascimento: new Date(2000, 1, 19),
        endereco: "Taguatiganta Norte",
        telefone: "+55061981467652",
        email: "mendes.distribuição@gmail.com",
      },
    ]);
  }
}
