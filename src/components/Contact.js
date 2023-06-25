import Image from '../assets/house/4.jpeg'
import Footer from '../home/Footer';

const Contact = () => {
    return ( 
        <div className="contact-container">
            <div className="contact-header">
                <img src={Image} alt="" />
                <div className="overlay" style={{textAlign: "center", zIndex: "1"}}>
                    <h1 style={{margin: "15px"}}>Contact Us About Our Properties.</h1>
                    <p style={{margin: "15px"}}>We would love to show you how you can become a property owner
                        in ne of the finest locations around the country. <br />
                        Here are a few ways to reach out to our sales team.
                    </p>
                </div>
            </div>
            <div className="contact-option">
                <div className="phone">
                    <div className="phone-card">
                        <i className="fa fa-phone"></i>
                        <div className="info">
                            <p style={{color: "#141414"}}>Speak directly to  any of our agents.</p>
                            <p style={{color: "blueviolet", fontSize: "1rem", fontWeight: "bolder"}}>+234-70-365-327-10</p>
                            <p style={{color: "blueviolet"}}>See all numbers and locations.</p>
                        </div>
                    </div>

                    <div className="phone-card">
                        <i className="fa-brands fa-rocketchat"></i>
                        <div className="info">
                            <p> Chat directly with <br /> our sales team.</p>
                            <button>Chat Now</button>
                        </div>
                    </div>

                    <div className="socials" style={{color: "blueviolet",
                     marginTop:"20px", textAlign: "center", width: "100%"}}>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                    
                </div>
                <div className="phone">
                    <form action="">
                        <label htmlFor="">Name</label>
                        <input type="text" />

                        <label htmlFor="">Email</label>
                        <input type="email" name="" id="" />

                        <label htmlFor="">Message</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>


                        <button type="submit">Send</button>
                    </form>
                    
                </div>
            </div>

            
        </div>
     );
}
 
export default Contact;