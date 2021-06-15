import React, { Fragment } from 'react';

class MainBody extends React.Component {
  state = {
    valuePi: 0,
    valueSun: 0,
    radius: 696340
  }

  componentWillMount () {
    fetch("http://localhost:3080/get-numbers")
      .then(res => res.json())
      .then(
        (result) => {
          let circumference = 2 * this.state.radius * result.valuePi;
          this.setState({
            valuePi: result.valuePi,
            valueSun: circumference.toFixed()
          });
        },
      )
  }

  render () {
    return(
      <Fragment>
        <h1>Space project</h1>
        <p className="mb-0">Current known value of Pi: {this.state.valuePi}</p>
        <p className="mb-0">Circumference of the sun: {this.state.valueSun.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} km</p>
      </Fragment>
    )
  }
}

export default MainBody;