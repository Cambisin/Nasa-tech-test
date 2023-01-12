import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("<SearchResults />", () => {
  const images = [
    "https://images-assets.nasa.gov/image/PIA06632/PIA06632~thumb.jpg",
    "https://images-assets.nasa.gov/image/PIA06640/PIA06640~thumb.jpg",
    "https://images-assets.nasa.gov/image/PIA07606/PIA07606~thumb.jpg",
    "https://images-assets.nasa.gov/image/PIA08946/PIA08946~thumb.jpg",
    "https://images-assets.nasa.gov/image/PIA09000/PIA09000~thumb.jpg",
    "https://images-assets.nasa.gov/image/PIA09240/PIA09240~thumb.jpg",
    "https://images-assets.nasa.gov/image/PIA09853/PIA09853~thumb.jpg",
  ];

  it("renders and matches snapshot", () => {
    const { asFragment } = render(<SearchResults results={images} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("displays the expected number of search results", () => {
    const { getAllByTestId } = render(<SearchResults results={images} />);
    expect(getAllByTestId("image")).toHaveLength(7);
  });
});