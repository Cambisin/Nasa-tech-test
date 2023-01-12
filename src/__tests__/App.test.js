

import { render } from "@testing-library/react";
import App from "../components/App";

describe("<App />", () => {
  it("renders and matches snapshot", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders as expected", () => {
    const { getByTestId } = render(<App />);
    const app = getByTestId("app");
    expect(app).toBeTruthy();
  });

  it("renders logo", () => {
    const { getByTestId } = render(<App />);
    const logo = getByTestId("logo");
    expect(logo).toBeTruthy();
  })
});