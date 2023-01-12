import React, { useState } from "react";
import "../styles/search.css";
import getImages from "../requests/getImages";
import PropTypes from "prop-types";

function Search() {
    const [value, setValue] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        getImages(value);
    };

    return (
        <div className="search">
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    className="search-input"
                    type="text"
                    aria-label="Search"
                    data-testid="search-input"
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Search NASA's image library..." />
                <button className="search-btn" type="submit" data-testid="search-btn">
                    Go!
                </button>
            </form>
        </div>
    );
}

Search.propTypes = {
    setSearchResults: PropTypes.func.isRequired,
  }

export default Search;