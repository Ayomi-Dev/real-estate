import { HouseContext } from "../HouseContext";
import React from 'react';

const Search = () => {

    const {handleFilter, properties} = React.useContext(HouseContext)
    console.log(handleFilter())

    return ( 
        <div className="search" onClick={handleFilter}>
            <i className="fa fa-search"></i>
        </div>
    );
}
 
export default Search;