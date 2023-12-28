import { getGifs } from "../helpers/getGifs";
describe("Pruebas en getGifs()", () => {
  test("debe de retornar un arreglo de gifs", async () => {
    const gifs = await getGifs("One punch");
  });
});
