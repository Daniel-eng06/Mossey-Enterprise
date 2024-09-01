// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import "./Account.css";
import Header from "../Header&Nav/Header&Nav.jsx";
import Footer from "../Footer/Footer.jsx";
import Facebook from "/public/facebook.png";
import Google from "/public/google.png";

function Account() {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
    // eslint-disable-next-line no-unused-vars
      const [loggedIn, setLoggedIn] = useState(false); // State to track if user is logged in

      const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate sign-in logic - set loggedIn to true for demonstration purposes
        setLoggedIn(true);
      };



      const acc = {
        sou1: Facebook,
        sou2: Google
    }


    return( <div>
            <Header/>
           <div className="signin-container">
              <h2 className="h2">Sign In</h2>
              <form onSubmit={handleSubmit} className="signin-form">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="abc@gmail.com"
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="abfsf123.zae,"
                    />
                    <button type="submit">Sign In</button>
              </form>
              <div className="social-signin">
                <p>Or sign in with:</p>
                <div className="social-icons">
                  <a href="https://www.facebook.com">
                    <img src={acc.sou1}/>
                  </a>
                  <a href="https://www.google.com">
                    <img src={acc.sou2}/>
                  </a>
                </div>
              </div>
            </div>
            <Footer/>
            <div className="pattern" />
        </div>
    )

}

export default Account;