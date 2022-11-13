import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Restaurante from "App/Models/Restaurante";

export default class extends BaseSeeder {
  public async run() {
    await Restaurante.createMany([
      {
        nome: "Coco Bambu",
        localizacao: "ParkShopping",
      },
      {
        nome: "TacoPep",
        localizacao: "Taguatinga",
      },
    ]);
  }
}
