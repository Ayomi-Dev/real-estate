import Image from '../assets/house/6.jpeg';

const Review = () => {
    return ( 
        <div className="review">
            <h1>Our <span style={{color: "blueviolet"}}>Clients</span> talk</h1>

            <div className="review-container">

                <div className="review-card">
                    <img src={ Image } alt="" />
                    <p>Name</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Repudiandae pariatur qui doloremque blanditiis saepe 
                        ipsum quam iure esse repellat iste! Libero natus 
                        inventore laboriosam animi ipsum commodi. Facilis, 
                        blanditiis laudantium!
                    </p>
                    <div className="rating">
                        <i className="fa fa-star"><span>4.5</span></i>
                        <i className="fa fa-thumbs-up"><span>12.5k</span></i>
                    </div>
                </div>

                <div className="review-card">
                    <img src={ Image } alt="" />
                    <p>Name</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Repudiandae pariatur qui doloremque blanditiis saepe 
                        ipsum quam iure esse repellat iste! Libero natus 
                        inventore laboriosam animi ipsum commodi. Facilis, 
                        blanditiis laudantium!
                    </p>
                    <div className="rating">
                        <i className="fa fa-star"><span>4.5</span></i>
                        <i className="fa fa-thumbs-up"><span>12.5k</span></i>
                    </div>
                </div>

                <div className="review-card">
                    <img src={ Image } alt="" />
                    <p>Name</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Repudiandae pariatur qui doloremque blanditiis saepe 
                        ipsum quam iure esse repellat iste! Libero natus 
                        inventore laboriosam animi ipsum commodi. Facilis, 
                        blanditiis laudantium!
                    </p>
                    <div className="rating">
                        <i className="fa fa-star"><span>4.5</span></i>
                        <i className="fa fa-thumbs-up"><span>12.5k</span></i>
                    </div>
                </div>

            </div>

        </div>
     );
}
 
export default Review;