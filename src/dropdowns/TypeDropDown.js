import {useState, useContext} from 'react'
import { HouseContext } from '../HouseContext'



const TypeDropDown = () => {

    const {type, setType, propertyType } = useContext(HouseContext)

    const [openMenu, setOpenMenu] = useState(false)

    const handleToggle = () => {
        setOpenMenu(!openMenu)
    }
     

    return ( 
        <div className="drop-down">
            <div className="drop-down-btn" onClick={handleToggle}>
                <div className="drop-down-title">
                    <div className="icon">
                        <i className="fa fa-building"></i>
                    </div>
                    <div className="name">
                        <p style={{color: 'blueviolet'}}>{ type }</p>
                        <p>Choose a type</p>
                    </div>
                </div>

                {openMenu ? (<i className="fa fa-chevron-up"></i> )
                    : ( <i className="fa fa-chevron-down"></i> )
                }
            </div>


            <ul className={`drop-down-menu ${openMenu ? 'toggle' : ''}`}>
               
                {propertyType.map((property, index) => {
                    return (
                        <li className="type-name" onClick={() => {
                            setType(property);
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
 
export default TypeDropDown;