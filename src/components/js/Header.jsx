import React from "react";
import "../css/Header.css";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-lightgf py-0">
        <a className="navbar-brand" href='#root' >kelasku</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <a className="nav-link" href='#root'>+</a>
            <a className="nav-link" href='#root'><i className="far fa-user-circle"></i></a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
