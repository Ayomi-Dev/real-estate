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
    const { properties, isLoading, count } = useContext(HouseContext)
    

    return ( 
        <div className="properties">
            <h1>Explore the most <span style={{color: "blueviolet"}}>Suitable</span> property for your lifestyle.</h1>

            <div className="filters">

                <TypeDropDown />

                <PriceDropDown />

               <LocationDropDown />

               <Search />

            
            </div>

            {count && <p className="result" style={{textAlign: "center", opacity: ".7"}}>
                ({properties.length}) result(s) found
                </p>
            }
            
            {/* {!isLoading && <p className="not-found">No Match Found</p>} */}

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