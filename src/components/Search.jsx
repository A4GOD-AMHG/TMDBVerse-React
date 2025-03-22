import React from "react";

const Search = ({ searchValue, setSearchValue }) => {
    const handleClear = () => {
        setSearchValue("");
    };

    return (
        <div className="search mt-4 md:mt-3 relative flex items-center">
            <img src="search.svg" alt="search" className="absolute left-5 h-5 w-5" />
            <input
                type="text"
                placeholder="Try 'The Dark Knight' or 'Forrest Gump'"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full bg-transparent py-2 sm:pr-12 pl-12 text-base text-white placeholder-white outline-none"
            />
            {searchValue && (
                <img
                    className="absolute h-5 w-5 right-5 cursor-pointer"
                    onClick={handleClear} src="cancel.svg" />
            )}
        </div>
    );
};

export default Search;