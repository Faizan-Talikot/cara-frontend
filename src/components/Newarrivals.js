import React from 'react'
import { Link,useNavigate} from "react-router-dom";


const Newarrivals = (props) => {
    let navigate = useNavigate();
    const {productItems2} = props;
    const SendDetails = (productItem)=>{
        // console.log(hand)
        navigate("/specificproduct", {
            state: {
               image : productItem.image,
               name: productItem.name,
               price: productItem.price,
               id: productItem.id,
            },
        });
        // navigate("/specificproduct");
    }
  return (
    <div>
      <section id="product1" className="section-p1 reveal" style={{padding: props.shop?"0px 80px":""}}>
        <h2 style={{display: props.disable?"none":""}}>New Arrivals</h2>
        <p style={{display: props.disable?"none":""}}>Summer Collection New Modern Design</p>
        <div className="pro-container reveal">
        {productItems2.map((productItem)=>(
                <div className="pro" key={productItem.id} onClick={()=>SendDetails(productItem)}>
                <img src={productItem.image} alt=""/>
                <div className="des">
                    <span>adidas</span>
                    <h5>{productItem.name}</h5>
                    <div className="star">
                        <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                    </div>
                    <h4>${productItem.price}.00</h4>
                </div>
                <Link to="#"><i className="lni lni-shopping-basket cart"></i></Link>
            </div>
            ))}
            {/* <div className="pro">
                <img src={n1} alt=""/>
                <div className="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <div className="star">
                    <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                    </div>
                    <h4>$78</h4>
                </div>
                <Link to="#"><i className="lni lni-shopping-basket cart"></i></Link>
            </div>

            <div className="pro">
                <img src={n2} alt=""/>
                <div className="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <div className="star">
                    <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                    </div>
                    <h4>$78</h4>
                </div>
                <Link to="#"><i className="lni lni-shopping-basket cart"></i></Link>
            </div>

            <div className="pro">
                <img src={n3} alt=""/>
                <div className="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <div className="star">
                    <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                    </div>
                    <h4>$78</h4>
                </div>
                <Link to="#"><i className="lni lni-shopping-basket cart"></i></Link>
            </div>

            <div className="pro">
                <img src={n4} alt=""/>
                <div className="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <div className="star">
                    <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                    </div>
                    <h4>$78</h4>
                </div>
                <Link to="#"><i className="lni lni-shopping-basket cart"></i></Link>
            </div>

            <div className="pro">
                <img src={n5} alt=""/>
                <div className="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <div className="star">
                    <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                    </div>
                    <h4>$78</h4>
                </div>
                <Link to="#"><i className="lni lni-shopping-basket cart"></i></Link>
            </div>

            <div className="pro">
                <img src={n6} alt=""/>
                <div className="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <div className="star">
                    <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                    </div>
                    <h4>$78</h4>
                </div>
                <Link to="#"><i className="lni lni-shopping-basket cart"></i></Link>
            </div>

            <div className="pro">
                <img src={n7} alt=""/>
                <div className="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <div className="star">
                    <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                    </div>
                    <h4>$78</h4>
                </div>
                <Link to="#"><i className="lni lni-shopping-basket cart"></i></Link>
            </div>

            <div className="pro">
                <img src={n8} alt=""/>
                <div className="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-shirts</h5>
                    <div className="star">
                    <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                        <i className="lni lni-star-fill"></i>
                    </div>
                    <h4>$78</h4>
                </div>
                <Link to="#"><i className="lni lni-shopping-basket cart"></i></Link>
            </div> */}
        </div>
        
    </section>
    </div>
  )
}

export default Newarrivals
