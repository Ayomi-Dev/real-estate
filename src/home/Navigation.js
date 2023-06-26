
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HouseContext } from '../HouseContext';

const Navigation = () => {


    const { savedProperty } = React.useContext(HouseContext)
    
    const [openMenu, setOpenMenu] = useState(false);
    const location = useLocation()
    
    //adding active style to each menu corresponding to page name
    const activeMenu = path => {
        return location.pathname === path ? 'active' : '';
    }


    //toggle mobile menu on smaller screens
    const handleToggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return ( 
        <div className="navigation">
            <div className="nav-menu">

                <div className="logo">
                    <Link to={'/'}>
                        <i className='fa fa-landmark'></i>
                        <p>De Realtor</p>
                    </Link>
                </div>

                <ul className={`menus ${openMenu ? 'open' : ''}`}>

                   <li className={activeMenu('/')} onClick={handleToggleMenu}>
                        <Link to='/'>Home</Link>
                    </li> 

                   <li className={activeMenu('/about')} onClick={handleToggleMenu}>
                        <Link to='/about'>About Us</Link>
                    </li> 

                   <li className={activeMenu('/properties')} onClick={handleToggleMenu}>
                        <Link to='/properties'>Lists</Link>
                    </li>

                   <li className={activeMenu('/contact')} onClick={handleToggleMenu}> 
                        <Link to='/contact'>Contact</Link>
                    </li> 
                </ul>
                
                <div className="notify">
                    
                    <Link to={`/bookmarks`} >
                        <div className="counter">
                            <i className="fa fa-bookmark" style={{color: "#141414"}}></i>
                            <div className="count-num">{savedProperty.length}</div>
                        </div>
                    </Link>
                    

                    <div className="mobile-menu">
                        <i className={`fa fa-bars ${openMenu ? "fa fa-times" : ''}`} onClick={handleToggleMenu}></i>
                    </div>

                </div>
                
            </div>
        </div>
     );
}
 
export default Navigation;