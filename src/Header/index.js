import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header">
        <div className="companyName">Dashboard</div>
        <div className="account">My Account</div>
      </div>
    );
  }
}
export default Header;
