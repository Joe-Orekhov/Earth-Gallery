import React, { useState } from "react";

function Search({ handleSearchSubmit }) {

    const [ searchInput, setSearchInput ] = useState("");

    function handleUserTyping(event) {
        setSearchInput(event.target.value);
    }

    function handleClick(event) {
        event.preventDefault();
        handleSearchSubmit(searchInput);
    }

    return (
        <div className="ui-large-fluid-icon-input">
            <form onSubmit={handleClick}>
                <input
                    type="text"
                    placeholder="Search Earth Gallery"
                    onChange={handleUserTyping}
                    className="text-box"
                />
                <input type="submit" className="search-button" value="Search" />
            </ form>
        </div>
    )
}

export default Search;