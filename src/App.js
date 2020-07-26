import React, { Component } from "react"
import { connect } from "react-redux"
import logo from "./logo.svg"
import "./App.css"
import { Chart } from "react-google-charts"
import LineChart from "./Charts/LineChart"
import PieChart from "./Charts/PieChart"

import GeoChart from "./Charts/GeoChart"

import BarChart from "./Charts/BarChart"
import SideBar from "./Sidebar"
import Header from "./Header"
import { getData } from "./Saga"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      option: 1,
    }
  }

  componentDidMount() {
    this.props.dispatch(getData())
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data !== null) {
      return { data: nextProps.data }
    } else return null
  }

  handleNavigation = (option) => {
    this.setState({
      option: option,
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
          <SideBar
            handleNavigation={(option) => this.handleNavigation(option)}
          />
          {this.state.data.length !== 0 && (
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "space-evenly",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <strong> World census of use of tobacco products</strong>
              {this.state.option == 1 && <BarChart data={this.state.data} />}
              {this.state.option == 2 && <LineChart data={this.state.data} />}
              {this.state.option == 3 && <GeoChart data={this.state.data} />}
              {this.state.option == 4 && <PieChart data={this.state.data} />}
            </div>
          )}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.reducer.data,
  }
}

export default connect(mapStateToProps)(App)
