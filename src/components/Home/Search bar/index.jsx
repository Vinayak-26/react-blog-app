import React from "react";
import './styles.css'
function SearchBar({value, handleSearchKey, clearSearch, formSubmit}) {
    return(
       <div className="searchBar-wrap">
            <form onSubmit={formSubmit}>
                <input type="text" 
                 placeholder="Search  by Category"
                 value={value}
                 onChange={handleSearchKey}
                  />    
                
                {value && <span className="searchBar-wrap-span" onClick={clearSearch}>X</span>}
            <button className="searchBar-wrap-button">Go</button>
            </form>  
       </div>
    );
}
export default SearchBar;