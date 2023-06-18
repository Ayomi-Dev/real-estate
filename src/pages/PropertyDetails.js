

const PropertyDetails = () => {
    return ( 
        <div className="property-details">
            
            <div className="details-section">

                <div className="name-price">
                    <h1>House</h1>
                    <h2>Price</h2>
                </div>

                <div className="property-img">
                    <img src="./house/3.jpeg" alt="" />
                </div>

                <div className="more-images">
                    <div className="img">
                        <img src="./house/2.jpeg" alt="" />
                    </div>
                    <div className="img">
                        <img src="./house/2.jpeg" alt="" />
                    </div>
                    <div className="img">
                        <img src="./house/2.jpeg" alt="" /> 
                    </div>
                    <div className="img">
                        <img src="./house/2.jpeg" alt="" />
                    </div>
                    <div className="img">
                        <img src="./house/2.jpeg" alt="" />
                    </div>
                    <div className="img">
                        <img src="./house/2.jpeg" alt="" />
                    </div>
                    
                </div>


                <div className="property-desc">
                    <h2>Description</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Libero incidunt quam velit, adipisci vero nisi asperiores, 
                        totam a possimus eos, quis non recusandae doloribus alias numquam 
                        maxime ullam debitis. Dolor!
                    </p>
                </div>

                <div className="location-section">
                    <p>Location</p>
                    <div className="interior">
                        <i className="fa fa-bed"></i>
                        <i className="fa fa-bath"></i>
                        <i className="fa fa-kitchen-set"></i>
                    </div>
                </div>


                <div className="cta">
                    <button>Save for later</button>
                </div>
                
            </div> 


            <div className="agent-section">

                <h1 style={{textAlign: "center"}}>Contact Agent</h1>

                <div className="contact-img">
                    <img src="./house/6.jpeg" alt="" />
                </div>
                <form action="">
                    
                    <label htmlFor="">Add Phone number</label>
                    <input type="tel" 
                        
                    />


                    <label htmlFor="">Write a message</label>
                    <input type="text" required 
                        placeholder="Type Your message"
                    />



                    <button type="submit">Send</button>
                </form>

                <div className="contacts">
                    <i className="fa-brands fa-whatsapp"></i>
                    <i className="fa-brands fa-phone"></i>
                    <i className="fa fa-envelop"></i>
                </div>
            </div>

        </div>
     );
}
 
export default PropertyDetails;