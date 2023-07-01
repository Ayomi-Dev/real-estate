import { Link } from "react-router-dom";

import { propertyInfo } from "../HouseInfo";
import { useContext, useRef, useState } from "react";
import { HouseContext } from "../HouseContext";

const Feature = () => {
    const { handleBookmarks, handleDelete } = useContext(HouseContext)
    const featuredProperties = propertyInfo.filter(property => property.category === 'feature')

    const featureRef  = useRef()
    const [isSaved, setIsSaved] = useState('');


    const handleScrollLeft = () => {
        featureRef.current.scrollBy({
            left: -150, 
            behavior: 'smooth',
        })
    } 
    const handleScrollRight = () => {
        featureRef.current.scrollBy({
            left: 150, 
            behavior: 'smooth',
        })
    } 
    
    return ( 
        <div className="feature">
            <div className="title">
                <h1><span>Featured</span> Properties</h1>
                <h1>
                    <i className="fa fa-arrow-left-long" onClick={ handleScrollLeft }></i>

                    <Link to={'/properties'}>
                        <span>See all</span> 
                    </Link>

                    <i className="fa fa-arrow-right-long" onClick={ handleScrollRight }></i>

                </h1>
            </div>
            

            <div className="feature-property" ref={ featureRef }>
                
                {featuredProperties.map((property, index) => {
                    
                    const toggleBookmark = (propertyId) => {
                        if(isSaved === propertyId){
                            handleDelete(propertyId)
                            setIsSaved('')
                        }
                        else{
                            handleBookmarks(property);
                            setIsSaved(propertyId);
                        }

                    }

                    return (
                        <div className="property" key={index}>

                            <div className="property-img">
                                <img src={property.img} alt="" />

                                <div className="layer">
                                    <i className={`fa fa-heart ${isSaved === property.id ? 'active' : ''}`} onClick={() => toggleBookmark(property.id) }></i>

                                    <Link to={`/details/${property.id}`} >
                                        Click to view details
                                    </Link>
                                    
                                </div>

                            </div> 

                            <div className="property-details">

                                <div className="name-price">
                                    <h3>{property.name}</h3>
                                    <h3>${property.price}</h3>
                                </div>

                                <div className="location-section">
                                    <p><i className="fa fa-location-dot"></i> {property.location}, {property.city}</p>
                                    <div className="interior">

                                        <i className="fa fa-bed"></i><span>{property.beds}</span>
                                        <i className="fa fa-bath"></i><span>{property.baths}</span>
                                        <i className="fa fa-kitchen-set"></i><span>{property.kitchen}</span>
 
                                    </div>

                                </div>


                                <div className="cta">
                                    <Link to={`/details/${property.id}`}>
                                        <button>Book Now</button>
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                    )
                })}
            </div> 
        </div>
     );
}
 
export default Feature;