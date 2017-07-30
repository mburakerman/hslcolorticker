import React from 'react';

import CurrentTime from './currentTime';
import random from '../img/random.png';

import tinycolor from 'tinycolor2';
import GithubCorner from 'react-github-corner';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      h: 342,
      s: 14,
      l: 76,
      a: 1,
      hex: '',
      rgba: '',
      hsla: ''
    }
  }

  changeH(e) {
    this.setState({
      h: e.target.value
    }, () => {
      this.convertColor();
    });

    this.changeSelectionBcolor()
  }

  changeS(e) {
    this.setState({
      s: e.target.value
    }, () => {
      this.convertColor();
    });

    this.changeSelectionBcolor()
  }

  changeL(e) {
    this.setState({
      l: e.target.value
    }, () => {
      this.convertColor();
    });

    this.changeSelectionBcolor()
  }

  changeA(e) {
    this.setState({
      a: e.target.value
    }, () => {
      this.convertColor();
    });

    this.changeSelectionBcolor()
  }

  colorIsValid(yourColor, yourId) {
    if (!yourColor.isValid()) {
      document
        .getElementById(yourId)
        .style
        .background = "rgba(255,0,0,0.5)";
    } else {
      document
        .getElementById(yourId)
        .style
        .background = "rgba(0,0,0,0.5)";
    }
  }

  typeHex(e) {
    let val = e.target.value;

    let color = tinycolor(e.target.value);
    let getHsl = color.toHsl();

    this.colorIsValid(color, "colorHex");

    this.setState({
      h: Math.floor(getHsl.h),
      s: Math.floor(getHsl.s * 100),
      l: Math.floor(getHsl.l * 100),
      hex: e.target.value,
      rgba: this.convertRgba(e.target.value),
      hsla: this.convertHsla(e.target.value)
    }, () => {
      this.changeSelectionBcolor();
    })

  }

  rgbaIsValid(color, yourId) {
    let rgbaRegex = /^(\#[\da-f]{3}|\#[\da-f]{6}|rgba\(((\d{1,2}|1\d\d|2([0-4]\d|5[0-5]))\s*,\s*){2}((\d{1,2}|1\d\d|2([0-4]\d|5[0-5]))\s*)(,\s*(0\.\d+|1))\)|hsla\(\s*((\d{1,2}|[1-2]\d{2}|3([0-5]\d|60)))\s*,\s*((\d{1,2}|100)\s*%)\s*,\s*((\d{1,2}|100)\s*%)(,\s*(0\.\d+|1))\)|rgb\(((\d{1,2}|1\d\d|2([0-4]\d|5[0-5]))\s*,\s*){2}((\d{1,2}|1\d\d|2([0-4]\d|5[0-5]))\s*)|hsl\(\s*((\d{1,2}|[1-2]\d{2}|3([0-5]\d|60)))\s*,\s*((\d{1,2}|100)\s*%)\s*,\s*((\d{1,2}|100)\s*%)\))$/;

    if (!rgbaRegex.test(color)) {
      document
        .getElementById(yourId)
        .style
        .background = "rgba(255,0,0,0.5)";
    } else {
      document
        .getElementById(yourId)
        .style
        .background = "rgba(0,0,0,0.5)";
    }
  }

  typeRgba(e) {
    let val = e.target.value;

    let color = tinycolor(e.target.value);
    let getHsl = color.toHsl();
    let color2 = color.toRgb();

    this.rgbaIsValid(e.target.value, "colorRgba");

    this.setState({
      h: Math.floor(getHsl.h),
      s: Math.floor(getHsl.s * 100),
      l: Math.floor(getHsl.l * 100),
      a: color.getAlpha(),
      hex: this.convertHex(e.target.value),
      rgba: e.target.value,
      hsla: this.convertHsla(e.target.value)
    }, () => {
      this.changeSelectionBcolor();
    })

  }

  hslaIsValid(color, yourId) {
    let hslaRegex = /^(\#[\da-f]{3}|\#[\da-f]{6}|rgba\(((\d{1,2}|1\d\d|2([0-4]\d|5[0-5]))\s*,\s*){2}((\d{1,2}|1\d\d|2([0-4]\d|5[0-5]))\s*)(,\s*(0\.\d+|1))\)|hsla\(\s*((\d{1,2}|[1-2]\d{2}|3([0-5]\d|60)))\s*,\s*((\d{1,2}|100)\s*%)\s*,\s*((\d{1,2}|100)\s*%)(,\s*(0\.\d+|1))\)|rgb\(((\d{1,2}|1\d\d|2([0-4]\d|5[0-5]))\s*,\s*){2}((\d{1,2}|1\d\d|2([0-4]\d|5[0-5]))\s*)|hsl\(\s*((\d{1,2}|[1-2]\d{2}|3([0-5]\d|60)))\s*,\s*((\d{1,2}|100)\s*%)\s*,\s*((\d{1,2}|100)\s*%)\))$/;

    if (!hslaRegex.test(color)) {
      document
        .getElementById(yourId)
        .style
        .background = "rgba(255,0,0,0.5)";
    } else {
      document
        .getElementById(yourId)
        .style
        .background = "rgba(0,0,0,0.5)";
    }

  }

  typeHsla(e) {
    let val = e.target.value;

    let color = tinycolor(e.target.value);
    let getHsl = color.toHsl();

    this.hslaIsValid(e.target.value, "colorHsla")

    this.setState({
      h: Math.floor(getHsl.h),
      s: Math.floor(getHsl.s * 100),
      l: Math.floor(getHsl.l * 100),
      a: color.getAlpha(),
      hex: this.convertHex(e.target.value),
      rgba: this.convertRgba(e.target.value),
      hsla: e.target.value
    }, () => {
      this.changeSelectionBcolor();
    })

  }

  numberIsValid(e, maxNumber, yourId) {
    if (e.target.value > maxNumber) {
      document
        .getElementById(yourId)
        .style
        .background = "rgba(255,0,0,0.5)"
    } else {
      document
        .getElementById(yourId)
        .style
        .background = "rgba(0,0,0,0.5)"
    }
  }

  typeH(e) {

    this.numberIsValid(e, 360, "typeH");

    this.setState({
      h: e.target.value
    }, () => {
      this.convertColor();
    });

    this.changeSelectionBcolor()
  }

  typeS(e) {
    this.numberIsValid(e, 360, "typeS");

    this.setState({
      s: e.target.value
    }, () => {
      this.convertColor();
    });

    this.changeSelectionBcolor()
  }

  typeL(e) {
    this.numberIsValid(e, 100, "typeL");

    this.setState({
      l: e.target.value
    }, () => {
      this.convertColor();
    });

    this.changeSelectionBcolor()
  }

  typeA(e) {
    this.numberIsValid(e, 1, "typeA");

    this.setState({
      a: e.target.value
    }, () => {
      this.convertColor();
    });

    this.changeSelectionBcolor()
  }

  convertHex(yourColor) {
    let color = tinycolor(yourColor);
    let getHex = color.toHex();

    let colorHex = `#${getHex}`;
    return colorHex;
  }

  convertRgba(yourColor) {
    let color = tinycolor(yourColor);
    let getRgba = color.toRgb();

    let showRgba = Object
      .keys(getRgba)
      .map(function (key) {
        return getRgba[key];
      })

    let colorRgba = `rgba(${showRgba})`;

    return colorRgba;
  }

  convertHsla(yourColor) {
    let color = tinycolor(yourColor);
    let getHsl = color.toHsl();

    let colorHsla = `hsla(${Math.floor(getHsl.h)},${Math.floor(getHsl.s * 100)}%,${Math.floor(getHsl.l * 100)}%,${color.getAlpha()})`;

    return colorHsla;
  }

  convertColor() {

    var color = tinycolor(`hsla(${this.state.h},${this.state.s}%,${this.state.l}%,${this.state.a})`);
    let getRgba = color.toRgb();
    let colorHex = color.toHexString();

    let showRgba = Object
      .keys(getRgba)
      .map(function (key) {
        return getRgba[key];
      });

    let colorRgba = `rgba(${showRgba})`;

    let colorHsla = `hsla(${this.state.h},${this.state.s}%,${this.state.l}%,${this.state.a})`;

    this.setState({hsla: colorHsla, hex: colorHex, rgba: colorRgba});
  }

  copyToClipboard(param) {
    var textField = document.createElement('textarea');
    textField.innerText = param.target.value;
    document
      .body
      .appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  }

  randomColor() {
    let randomH = Math.floor(Math.random() * (360 - 0 + 1)) + 0;
    let randomS = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    let randomL = Math.floor(Math.random() * (100 - 0 + 1)) + 0;

    this.setState({
      h: randomH,
      s: randomS,
      l: randomL
    }, () => {
      this.changeSelectionBcolor()
      this.convertColor()
    })

  }

  selectOnFocus(e) {
    e.target.select();
  }

  changeSelectionBcolor() {
    document
      .documentElement
      .style
      .setProperty(`--selectionBcolor`, `hsla(${this.state.h},${this.state.s}%,${this.state.l}%,${this.state.a})`);
  }

  componentDidMount() {
    this.changeSelectionBcolor()
    this.convertColor();
    document.body.style.visibility = "visible";
  }

  render() {
    return (
      <div className="app">
        <div className="app-container">

          <GithubCorner
            href={"https://github.com/mburakerman/hslcolorticker"}
            bannerColor="transparent"
            octoColor="#fff"
            width={80}
            height={80}
            direction="right"/>

          <h1 className="title">
            <a href="https://mburakerman.github.io/hslcolorticker/">HSL Color Ticker</a>
          </h1>
          <p className="desc">A HSL color ticker, also a picker</p>

          <div className="picker-container">{/* picker-container */}

            <div
              id="color-preview"
              style={{
              "backgroundColor": `hsla(${this.state.h},${this.state.s}%,${this.state.l}%,${this.state.a})`
            }}></div>

            <div id="color-hsla">
              <label for="h">

                <input
                  type="range"
                  id="h"
                  min="0"
                  max="360"
                  value={this.state.h}
                  onChange={this
                  .changeH
                  .bind(this)}/>

                <input
                  type="number"
                  id="typeH"
                  min="0"
                  max="360"
                  value={this.state.h}
                  onChange={this
                  .typeH
                  .bind(this)}/>

              </label>

              <label for="l">

                <input
                  type="range"
                  id="s"
                  min="0"
                  max="100"
                  value={this.state.s}
                  onChange={this
                  .changeS
                  .bind(this)}/>

                <input
                  type="number"
                  id="typeS"
                  min="0"
                  max="360"
                  value={this.state.s}
                  onChange={this
                  .typeS
                  .bind(this)}/>

              </label>

              <label for="l">

                <input
                  type="range"
                  id="l"
                  min="0"
                  max="100"
                  value={this.state.l}
                  onChange={this
                  .changeL
                  .bind(this)}/>

                <input
                  type="number"
                  id="typeL"
                  min="0"
                  max="100"
                  value={this.state.l}
                  onChange={this
                  .typeL
                  .bind(this)}/>

              </label>

              <label for="a">

                <input
                  type="range"
                  id="a"
                  min="0"
                  step="0.01"
                  max="1"
                  value={this.state.a}
                  onChange={this
                  .changeA
                  .bind(this)}/>

                <input
                  type="number"
                  id="typeA"
                  min="0"
                  max="1"
                  value={this.state.a}
                  onChange={this
                  .typeA
                  .bind(this)}/>

              </label>
            </div>

          </div>{/* picker-container */}

          <div className="hex-rgba-hsla-container">{/* hex-rgba-hsla-container */}

            <input
              type="text"
              id="colorHex"
              onChange={this
              .typeHex
              .bind(this)}
              onDoubleClick={this
              .copyToClipboard
              .bind(this)}
              value={this.state.hex}/>

            <input
              type="text"
              id="colorRgba"
              onChange={this
              .typeRgba
              .bind(this)}
              onDoubleClick={this
              .copyToClipboard
              .bind(this)}
              value={this.state.rgba}/>

            <input
              type="text"
              id="colorHsla"
              onChange
              ={this
              .typeHsla
              .bind(this)}
              onDoubleClick={this
              .copyToClipboard
              .bind(this)}
              value={this.state.hsla}/>

          </div>{/* hex-rgba-hsla-container */}

          <button
            className="randomColor"
            onClick={this
            .randomColor
            .bind(this)}>
            <img src={random}/>
          </button>

          <CurrentTime/>

          <footer>
            <p className="copyright">&copy; &nbsp;<a href="https://mburakerman.github.io/" target="_blank" rel="external">Mehmet Burak Erman</a>
            </p>
          </footer>

        </div>
      </div>
    )
  }
}
export default App;
