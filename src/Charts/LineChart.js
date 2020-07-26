import React, { Component } from "react"
import { Chart } from "react-google-charts"

class LineChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    if (this.props.data) {
      this.setState({
        data: this.props.data,
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Chart
          width={"60vw"}
          height={"50vh"}
          chartType="LineChart"
          data={this.state.data}
          mapsApiKey="YOUR_KEY_HERE"
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    )
  }
}
export default LineChart
