import React from "react";
import "../styles/App.css";
const App = () => {
  return (
    <>
    
          <section className="card-section">
          <div id="main">
              <div className="container">
                <div className="community">
                  <h2 className="community-header">Join our community</h2>
                  <h3 className="community-sub-header">
                    30-day, hassle-free monkey back gurarantee
                  </h3>
                  <p className="community-text">
                    Gain access to our full library of tutorials along with expert
                    code reviews. Perfect for any developers who are serious about
                    honing their skills.
                  </p>
                </div>
                <div className="card-details">
                  <div className="card">
                    <p className="card-header">Monthly Subscription</p>
                    <div className="price">
                      <span>$29</span>
                      <p>Per Month</p>
                    </div>
                      <p className="card-details-text">
                        Full access for less than $1 a day.
                      </p>
                      <a href="#" className="btn btn-card">
                        Sign Up
                      </a>
                  </div>
                  <div className="why-us">
                    <h4 className="why-us-header">Why Us</h4>
                    <div className="why-us-lists">
                      <ul className="why-us-items"> 
                        <li className="why-us-items">Tutorials by industry experts</li>
                        <li className="why-us-items">Peer & expert code review</li>
                        <li className="why-us-items">Coding exercises</li>
                        <li className="why-us-items">Access yo our GitHub repos</li>
                        <li className="why-us-items">Community forum</li>  
                        <li className="why-us-items">Flashcard decks</li>
                      </ul>
                  </div>
                </div>
              </div>
              </div>
              </div>
            </section>
          
    
    </>
  );
};

export default App;
