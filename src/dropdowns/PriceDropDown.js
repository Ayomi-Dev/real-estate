import { HouseContext } from "../HouseContext";
import { useContext, useState } from 'react';


const PriceDropDown = () => {

    const { propertyPrice, setPropertyPrice } = useContext(HouseContext)

    const prices = [
        {
            value: 'Price (Any)'
        },
        {
            value: "0 - 200000"
        },
        {
            value: "200000 - 400000"
        },
        {
            value: "400000 - 600000"
        },
        {
            value: "600000 - 800000"
        },
        {
            value: "800000 - 1000000"
        }
    ]

    

    const [openMenu, setOpenMenu] = useState(false);

    const handleToggle = () => {
        setOpenMenu(!openMenu)
    }

    return ( 
        <div className="drop-down">
            <div className="drop-down-btn" onClick={handleToggle}>
                <div className="drop-down-title">
                    <div className="icon">
                        <i className="fa fa-money-bill-1"></i>
                    </div>
                    <div className="name">
                        <p style={{color: 'blueviolet'}}>{ propertyPrice }</p>
                        <p>Choose a price</p>
                    </div>
                </div>

                {openMenu ? (<i className="fa fa-chevron-up"></i> )
                    : ( <i className="fa fa-chevron-down"></i> )
                }
            </div>


            <ul className={`drop-down-menu ${openMenu ? 'toggle' : ''}`}>
               
                {prices.map((price, index) => {
                    return (
                        <li className="type-name" onClick={() => {
                            setPropertyPrice(price.value);
                            handleToggle();
                            }} key={index}>
                                
                            {price.value}

                        </li>
                    )
                })}
            </ul>



            
        </div>
     );
}
 
export default PriceDropDown;