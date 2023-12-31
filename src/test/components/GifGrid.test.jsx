import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components";
import useFetchGifs from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en <GifGrid/>", () => {
  const category = "Arcane";

  test("debe de mostrar el loading inicialmente", () => {
    // Configura el valor de retorno del mock
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    // Renderiza el componente
    render(<GifGrid category={category} />);

    // Realiza las aserciones
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("debe de mostrar items cuando se cargan las imagenes useFetch", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "https://localhost/saitama.jpg",
      },
      {
        id: "123",
        title: "Goku",
        url: "https://localhost/goku.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    // Renderiza el componente
    render(<GifGrid category={category} />);
  });
});
