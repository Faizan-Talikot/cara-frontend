import React from 'react'
import { Link,useNavigate} from "react-router-dom";
// import productContext from '../context/products/productContext';


const Products = (props) => {
    let navigate = useNavigate();
    const {productItems} = props;
    // const context = useContext(productContext); 
    // const {SetProductDetails} = context;

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
      <section id="product1" className="section-p1 reveal">
        <h2 style={{display: props.disable?"none":""}}>Featured Products</h2>
        <p style={{display: props.disable?"none":""}}>Summer Collection New Modern Design</p>
        <div className="pro-container reveal">
            {productItems.map((productItem)=>(
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
            {/* <div className="pro" onClick={()=>{SendDetails(f1,"Cartoon Astronaut T-shirts","$139")}}>
                <img src={f1} alt=""/>
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
                    <h4>$139</h4>
                </div>
                <Link to="#"><i className="lni lni-shopping-basket cart"></i></Link>
            </div>

            <div className="pro" onClick={()=>{SendDetails(f2,"Cartoon Astronaut T-shirts","$139")}}>
                <img src={f2} alt=""/>
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
                    <h4>$139</h4>
                </div>
                <Link to="#"><i className="lni lni-shopping-basket cart"></i></Link>
            </div>

            <div className="pro" onClick={()=>{SendDetails(f3,"Cartoon Astronaut T-shirts","$139")}}>
                <img src={f3} alt=""/>
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
                    <h4>$139</h4>
                </div>
                <Link to="#"><i className="lni lni-shopping-basket cart"></i></Link>
            </div>

            <div className="pro" onClick={()=>{SendDetails(f4,"Cartoon Astronaut T-shirts","$139")}}>
                <img src={f4} alt=""/>
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
                    <h4>$139</h4>
                </div>
                <Link to="#"><i className="lni lni-shopping-basket cart"></i></Link>
            </div>

            <div className="pro">
                <img src={f5} alt=""/>
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
                    <h4>$139</h4>
                </div>
                <Link to="#"><i className="lni lni-shopping-basket cart"></i></Link>
            </div>

            <div className="pro">
                <img src={f6} alt=""/>
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
                    <h4>$139</h4>
                </div>
                <Link to="#"><i className="lni lni-shopping-basket cart"></i></Link>
            </div>

            <div className="pro">
                <img src={f7} alt=""/>
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
                    <h4>$139</h4>
                </div>
                <Link to="#"><i className="lni lni-shopping-basket cart"></i></Link>
            </div>

            <div className="pro">
                <img src={f8} alt=""/>
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
                    <h4>$139</h4>
                </div>
                <Link to="#"><i className="lni lni-shopping-basket cart"></i></Link>
            </div> */}
        </div>
        
    </section>
    </div>
  )
}

export default Products
