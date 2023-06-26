import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <Link to='/'>
                        <i className="fa fa-landmark"></i>
                        <p>De Realtor</p>
                    </Link>
                </div>
                <div className="footer-links">
                    <ul>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/properties'>
                                Pricings
                            </Link>
                        </li>
                        <li>
                            <Link to='/properties'>
                                Blogs
                            </Link>
                        </li>
                    </ul>

                    <div className="links">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <h2><i className="fa fa-copyright"></i> Copyright 2023. All Rights Reserved.</h2>
            </div>
        </div>
     );
}
 
export default Footer;