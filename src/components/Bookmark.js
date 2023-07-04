
import React, { useState } from 'react';

import { HouseContext } from "../HouseContext";
import { Link } from 'react-router-dom';

const Bookmark = () => {

    const { savedProperty, handleDelete } = React.useContext(HouseContext)
       
    return ( 
        <div className="bookmark">
            <h1>Your luxuries are <span style={{color: "blueviolet"}}>saved</span> here.</h1>
               
            <div className="container">

                { savedProperty.map((property, index) => {
                        return(
                            <div className='all' key={index}>
                                <Link to={`/details/${property.id}`}>
                                    <div className="saved-property">
                                        <div className="img-name">
                                            <img src={property.img} alt="" />
                                            <h2>{ property.name }</h2>
                                        </div>

                                        <div className="price-location">
                                            <h2 style={{color: "blueviolet"}}> ${ property.price} </h2>
                                            <h2>{property.location}, {property.city}</h2>
                                        </div>
                                    </div>
                                </Link>

                            
                                <div className="action">
                                    <button onClick={() =>handleDelete(property.id)}>Remove</button>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default Bookmark;