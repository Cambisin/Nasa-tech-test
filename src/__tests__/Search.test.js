import { render } from "@testing-library/react";
import Search from "../components/Search";

describe("<Search />", () => {
  const validProps = {
    setSearchResults: () => {},
  };

  it("renders and matches snapshot", () => {
    const { asFragment } = render(<Search setSearchResults={validProps.setSearchResults}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders search input as expected", () => {
    const { getByTestId } = render(<Search setSearchResults={validProps.setSearchResults} />);
    const input = getByTestId("search-input");
    expect(input).toBeTruthy();
  });

  it("renders search button as expected", () => {
    const { getByTestId } = render(<Search setSearchResults={validProps.setSearchResults} />);
    const button = getByTestId("search-btn");
    expect(button).toBeTruthy();
  });
});