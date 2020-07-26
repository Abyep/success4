import React, { Component } from "react";
import "./sidebar.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="sidebar">
        <div
          onClick={() => this.props.handleNavigation(2)}
          className="sidebar-detail"
        >
          Line Graph
        </div>
        <div
          onClick={() => this.props.handleNavigation(4)}
          className="sidebar-detail"
        >
          Pie Graph
        </div>
        <div
          onClick={() => this.props.handleNavigation(3)}
          className="sidebar-detail"
        >
          Geo Graph
        </div>
        <div
          onClick={() => this.props.handleNavigation(1)}
          className="sidebar-detail"
        >
          Bar Graph
        </div>
       
      </div>
    );
  }
}
export default Sidebar;
