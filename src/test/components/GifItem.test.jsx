import GifItem from "../../components/GifItem";
import { render, screen } from "@testing-library/react";

describe("Pruebas en <GifItem/>", () => {
  const title = "Jinx";
  const url = "http://arcane.com/";
  test("hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
  test("debe de mostrar la imagen con el url y el alt indicado", () => {
    render(<GifItem title={title} url={url} />);
    //expect(screen.getByRole("img").src).toBe(url);
    //expect(screen.getByRole("img").alt).toBe(title);
    const { src, alt } = screen.getByRole("img");
    expect(alt).toBe(title);
    expect(src).toBe(url);
  });
});
