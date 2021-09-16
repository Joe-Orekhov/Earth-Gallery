import React, { useState } from "react";

function Search({ handleSearchSubmit }) {

    const [ searchInput, setSearchInput ] = useState("");

    function handleUserTyping(event) {
        setSearchInput(event.target.value);
    }

    function handleClick(event) {
        handleSearchSubmit(searchInput);
    }

    return (
        <div className="ui-large-fluid-icon-input">
            <input
                type="text"
                placeholder="Search Earth Gallery"
                onChange={handleUserTyping}
                className="text-box"
            />
            <button className="search-button" onClick={handleClick}>Search</button>
        </div>
    )
}

export default Search;