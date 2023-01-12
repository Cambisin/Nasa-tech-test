import React from "react";
import "../styles/search-results.css";
import PropTypes from "prop-types";

const SearchResults = ({ results }) => {
  return results.length ? (
    results.map((result) => {
      return (
        <>
          <div className="image-container">
            <img
              className="image"
              src={result}
              alt="Search result from NASA database"
              data-testid="image"
            />
          </div>
        </>
      );
    })
  ) : (
    <p>Sorry, no results. Please try again</p>
    );
};

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
};

export default SearchResults;