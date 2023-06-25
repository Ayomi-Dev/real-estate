import { Link } from "react-router-dom";




const AllProperties = ({ properties }) => {
    
    return ( 
           
        <div className="all-properties">
        
            {properties.map((property, index) => {

                    return(   

                        <div className="props" key={ index }>
                            <div className="property-img">
                                    <img src={property.img} alt="" />
            
                                    <div className="layer">
                                        <i className="fa fa-heart"></i>
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
                    )}
            )}
            
        </div>
        
     );
}
 
export default AllProperties;