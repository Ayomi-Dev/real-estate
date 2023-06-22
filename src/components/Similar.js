import { Link } from "react-router-dom";


import { propertyInfo } from "../HouseInfo";

const Similar = () => {
    
    const featuredProperties = propertyInfo.filter(property => property.category === 'similar')

     
    
    return ( 
        <div className="feature">
            <div className="title">
                <h1><span>Similar</span> Properties</h1>
                <h1><span>See all</span> <i className="fa fa-arrow-right-long"></i></h1>
            </div>
            

            <div className="feature-property">
                
                {featuredProperties.map((property, index) => {
                    return (
                        <div className="property" key={index}>

                            <div className="property-img">
                                <img src={property.img} alt="" />

                                <div className="layer">
                                    <i className="fa fa-heart"></i>
                                    <Link to={`/details/${property.id}`} >
                                        See details
                                    </Link>
                                </div>

                            </div> 

                            <div className="property-details">

                                <div className="name-price">
                                    <h3>{property.name}</h3>
                                    <h3>${property.price}</h3>
                                </div>

                                <div className="location-section">
                                    <p>{property.location}, {property.city}</p>
                                    <div className="interior">

                                        <i className="fa fa-bed"></i><span>{property.beds}</span>
                                        <i className="fa fa-bath"></i><span>{property.baths}</span>
                                        <i className="fa fa-kitchen-set"></i><span>{property.kitchen}</span>

                                    </div>

                                </div>


                                <div className="cta">
                                    <button>Book Now</button>
                                </div>
                                
                            </div>
                        </div>
                    )
                })}
            </div> 
        </div>
     );
}
 
export default Similar;