
import { useParams } from "react-router-dom";
import { HouseContext } from "../HouseContext";
import React, { useState } from 'react'

import { propertyInfo } from '../HouseInfo'
import Similar from './Similar';


const PropertyDetails = () => {
    const { handleBookmarks, notify } = React.useContext(HouseContext);
    const { id } = useParams();
    
    
    const selectedProperty = propertyInfo.find(property => {
        return property.id === id
    })
    
    const [selectedImage, setSelectedImage] = useState(selectedProperty.img)
    
    //setting function for changing image
    const handleImageChange = (image) => {
        setSelectedImage(image);
    }

    // handling property saved

    

    return ( 
        <>
            <div className="prop-details"  >
            <div className="details-section"   >

                <div className="name-price">
                    <h1>{selectedProperty.name}</h1>
                    <h2>${selectedProperty.price}</h2>
                </div>

                <div className="property-img">
                    <img src={ selectedImage } alt="" />
                </div>

                <div className="more-images">
                    
                    {selectedProperty.images.map((image, index) => {
                        return (
                            <div className="img" key={index} 
                                onClick={() => handleImageChange(image)}>

                                <img src={image}  />

                            </div>
                        )
                    })}
                    
                </div>


                <div className="property-desc">
                    <h2>Description</h2>
                    <p>{selectedProperty.desc}
                    </p>
                </div>

                <div className="location-interior">
                    
                    <div className="more">
                        <i className="fa fa-i-cursor"></i>
                        <p>Type: {selectedProperty.type}</p>
                    </div>
                    <div className="more">
                        <i className="fa fa-maximize"></i>
                        <p>Size: {selectedProperty.size}</p>
                    </div>
                    <div className="more">
                        <i className="fa fa-bed"></i>
                        <p>Bedrooms: {selectedProperty.beds}</p>
                    </div>
                    <div className="more">
                        <i className="fa fa-kitchen-set"></i>
                        <p>Kitchen: {selectedProperty.kitchen}</p>
                    </div>
                    <div className="more">
                        <i className="fa fa-bath"></i>
                        <p>Bathrooms: {selectedProperty.baths}</p>
                    </div>
                    <div className="more">
                        <i className="fa fa-house-chimney-user"></i>
                        <p>Rooms: {selectedProperty.rooms}</p>
                    </div>
                    <div className="more">
                        <i className="fa fa-calendar"></i>
                        <p>Year: {selectedProperty.year}</p>
                    </div>
                    <div className="more">
                        <i className="fa fa-location-dot"></i>
                        <p>Location: {selectedProperty.location}, {selectedProperty.city}</p>
                    </div>
                </div>


                <div className="cta">
                    <button key={selectedProperty.id}
                        onClick={() => handleBookmarks(selectedProperty)}
                    >Save for later</button>
                    {notify && <p>You already saved this property.</p>}
                </div>
                
            </div> 

            
            <div className="agent-section">

                <h1 style={{textAlign: "center"}}> Contact Agent </h1>

                <div className="contact-img">
                    <img src={selectedProperty.img} alt="" /> <br />
                    <span>Dev. Ayo</span>
                </div>
                <form action="">
                    
                    <label htmlFor="">Add Phone number</label>
                    <input type="tel" 
                        
                    />


                    <label htmlFor="">Write a message</label>
                    <textarea name="" id="" cols="30" rows="10">

                    </textarea>



                    <button type="submit">Send</button>
                </form>

                <div className="contacts">
                    <i className="fa-brands fa-whatsapp"></i>
                    <i className="fa fa-phone"></i>
                    <i className="fa fa-at"></i>
                </div>
            </div>


            </div>

            <Similar /> 
        </>
     );
}
 
export default PropertyDetails;