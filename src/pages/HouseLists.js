// import { Link } from "react-router-dom";
import { useContext } from "react";
import { HouseContext } from "../HouseContext";
import AllProperties from "./AllProperties";
import TypeDropDown from "../dropdowns/TypeDropDown";
import PriceDropDown from "../dropdowns/PriceDropDown";
import LocationDropDown from "../dropdowns/LocationDropDown";
import Search from "./Search";


const PropertyLists = () => {
    const { properties } = useContext(HouseContext)
    
    

    

    return ( 
        <div className="properties">
            <div className="filters">
                <TypeDropDown />

                <PriceDropDown />

               <LocationDropDown />

               <Search />

            </div>

            <AllProperties properties= {properties} />
        </div>
     );
}
 
export default PropertyLists;