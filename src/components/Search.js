import { HouseContext } from "../HouseContext";
import React from 'react';

const Search = () => {

    const {handleAllFilter, properties} = React.useContext(HouseContext)

    return ( 
        <div className="search" onClick={()=> handleAllFilter()}>
            <i className="fa fa-search"></i>
        </div>
    );
}
 
export default Search;