import React from 'react';

class CurrentTime extends React.Component {
  constructor() {
    super();

    this.state = {
      h: '',
      s: '',
      l: '',
      currentTime: ''
    }
  }

  getCurrentTime() {
    let date = new Date();

    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hour = date.getHours();

    if (seconds <= 9) {
      seconds = `0${seconds}`;
    }
    if (minutes <= 9) {
      minutes = `0${minutes}`;
    }
    if (hour <= 9) {
      hour = `0${hour}`;
    }

    let color = {
      h: (360 / 60) * seconds,
      s: (60 / 100) * minutes,
      l: (100 / 24) * hour
    };

    color.h = Math.round(color.h)
    color.s = Math.round(color.s)
    color.l = Math.round(color.l)

    this.setState({h: color.h, s: color.s, l: color.l, currentTime: `${hour} : ${minutes} : ${seconds}`})
  }

  componentDidMount() {
    setInterval(this.getCurrentTime.bind(this), 1000);
  }

  render() {
    return (
      <div className="currentTime">

        <div
          className="currentTime-container"
          style={{
          "border": `3px solid hsl(${this.state.h},${this.state.s}%,${this.state.l}%)`
        }}>

          <h3
            style={{
            "color": `hsl(${this.state.h},${this.state.s}%,${this.state.l}%)`
          }}>{this.state.currentTime}</h3>

          <br/>

          <ul>
            <li>
              <p className="hue">Hue</p>
              <p>: {this.state.h}</p>
            </li>
            <li>
              <p className="saturation">Saturation</p>
              <p>: {this.state.s}%</p>
            </li>
            <li>
              <p className="luminosity">Luminosity</p>
              <p>: {this.state.l}%</p>
            </li>
          </ul>

        </div>

      </div>
    )
  }

}

export default CurrentTime;