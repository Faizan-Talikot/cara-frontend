import React from 'react'

const Newsletter = () => {
  return (
    <div>
       <section id="newsletter" className="section-p1 section-m1 reveal">
        <div className="newsletter">
            <h4 className="reveal">Sign up for Newsletter</h4>
            <p className="reveal">Get E-mail updates about our latest shop and <span>special offers.</span></p>
        </div>
        <div className="form reveal">
            <input type="text" id="email" placeholder="Your email address"/>
            <button className="normal" id="validate">Sign Up</button>
        </div>
    </section>
    </div>
  )
}

export default Newsletter
