import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.setState({
      total: null,
      next: null,
      operation: null,
    });
  }

  doMathOperations = ({ currentTarget: btn }) => {
    try {
      const buttonName = btn.outerText === '' ? btn.id : btn.outerText;
      const object = calculate(this.state, buttonName);
      this.setState(object);
    } catch (error) {
      const buttonName = btn.outerText === '' ? btn.id : btn.outerText;
      const { next } = this.state;

      if (next) {
        this.setState({ total: next, next: null });
      }

      this.setState({ operation: buttonName });
    }
  }

  render() {
    return (
      <div className="calc-grid">
        <div className="output">
          <div className="pre-operand"> </div>
          <div className="cur-operand">0</div>
        </div>
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="orange">/</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" className="orange">*</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="orange">-</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="orange">+</button>
        <button type="button" className="span-two">0</button>
        <button type="button">.</button>
        <button type="button" className="orange">=</button>
      </div>
    );
  }
}

export default Calculator;
