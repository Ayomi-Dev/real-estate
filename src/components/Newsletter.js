import Image from '../assets/apartment/1.jpeg'

const Newsletter = () => {
    return ( 
        <div className="newsletter">
            <img src={ Image } alt="" />
            <div className="overlay" style={{borderRadius: "10px"}}>
                <h1>Subscribe To Our <span style={{color: "blueviolet"}}>Newsletter</span>
                </h1>
                <h2>Get latest news on offers, promos and new deals.</h2>
                <form  className="news-email">
                    <input required type="email" name="" id="email" />
                    <button>Subscribe</button>
                </form>
            </div>
        </div>
     );
}
 
export default Newsletter;