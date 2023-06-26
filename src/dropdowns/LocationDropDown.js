import { HouseContext } from "../HouseContext";
import { useContext, useState } from 'react';


const LcationDropDown = () => {

    const { city, setCity, propertyLocation } = useContext(HouseContext)

    const [openMenu, setOpenMenu] = useState(false);

    const handleToggle = () => {
        setOpenMenu(!openMenu)
    }

    return ( 
        <div className="drop-down">
            <div className="drop-down-btn" onClick={handleToggle}>
                <div className="drop-down-title">
                    <div className="icon">
                        <i className="fa fa-location-dot"></i>
                    </div>
                    <div className="name">
                        <p style={{color: 'blueviolet'}}>{ city }</p>
                        <p>Choose a location</p>
                    </div>
                </div>

                {openMenu ? (<i className="fa fa-chevron-up"></i> )
                    : ( <i className="fa fa-chevron-down"></i> )
                }
            </div>


            <ul className={`drop-down-menu ${openMenu ? 'toggle' : ''}`}>
               
                {propertyLocation.map((property, index) => {
                    return (
                        <li className="type-name" onClick={() => {
                            setCity(property);
                            handleToggle();
                        }} key={index}>
                            {property}
                        </li>
                    )
                })}
            </ul>



            
        </div>
     );
}
 
export default LcationDropDown;