import React from "react";
const HelloBootstrap = () => (
  <div>
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="/">
            Clicky Game
          </a>
        </div>
      </div>
    </nav>
    <div className="jumbotron">
      <h1>CLICKY GAME!</h1>
      <p>
        
      </p>
    </div>    
      <div className="container">
         <img src ="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png" /> 
    </div>
  </div>
);
export default HelloBootstrap;