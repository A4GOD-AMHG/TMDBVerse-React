import React from "react";

const Search = ({ searchValue, setSearchValue }) => {
    return (
        <div className="search mt-4 md:mt-0">
            <img src="search.svg" alt="search" />

            <input
                type="text"
                placeholder="Try 'The Dark Knight' or 'Forrest Gump'"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
        </div>
    );
};

export default Search;
