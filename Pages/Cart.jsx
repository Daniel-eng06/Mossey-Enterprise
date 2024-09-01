// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Cart.css';
import Header from "../Mossey Components/Header&Nav/Header&Nav.jsx";
import Footer from "../Mossey Components/Footer/Footer.jsx";
import {Link} from "react-router-dom";


function Cart() {
    return(
        <div>
            <Header/>
            <div className="newcart">
                 <div className="cartbody">
                     <p id="act" ><Link to="/">Home {">"}</Link><span id="act1">Shopping Cart</span> </p>
                 </div>
                <p className="empty">
                    Your Shopping Cart is Empty!!! <br/> Guess what, you can check out our available Professional Tools above.
                </p>
            </div>
            <Footer/>
            <div className="pattern" />
        </div>

    )

}

export default Cart;