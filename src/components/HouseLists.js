// import { Link } from "react-router-dom";
import { useContext } from "react";
import { HouseContext } from "../HouseContext";
import AllProperties from "./AllProperties";
import TypeDropDown from "../dropdowns/TypeDropDown";
import PriceDropDown from "../dropdowns/PriceDropDown";
import LocationDropDown from "../dropdowns/LocationDropDown";
import Search from "./Search";

import { Oval } from "react-loader-spinner";


const PropertyLists = () => {
    const { properties, isLoading } = useContext(HouseContext)
    

    return ( 
        <div className="properties">
            <div className="filters">
                <TypeDropDown />

                <PriceDropDown />

               <LocationDropDown />

               <Search />

            </div>

            {isLoading ? 
                <Oval
                    height={80}
                    width={80}
                    color="blueviolet"
                    wrapperStyle={{
                        display: 'flex',
                        height: "50vh",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                    wrapperClass="spinner"
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#cf9fff"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                />
            
             :<AllProperties properties= {properties} />}
        </div>
     );
}
 
export default PropertyLists;