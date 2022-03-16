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
    const { next, total } = this.state;
    return (
      <div className="calc-grid">
        <div className="output">
          <div className="cur-operand">{ total && next ? next : total || next || 0 }</div>
        </div>
        <button onClick={this.doMathOperations} type="button">AC</button>
        <button onClick={this.doMathOperations} type="button">+/-</button>
        <button onClick={this.doMathOperations} type="button">%</button>
        <button onClick={this.doMathOperations} type="button" className="orange">/</button>
        <button onClick={this.doMathOperations} type="button">7</button>
        <button onClick={this.doMathOperations} type="button">8</button>
        <button onClick={this.doMathOperations} type="button">9</button>
        <button onClick={this.doMathOperations} type="button" className="orange">x</button>
        <button onClick={this.doMathOperations} type="button">4</button>
        <button onClick={this.doMathOperations} type="button">5</button>
        <button onClick={this.doMathOperations} type="button">6</button>
        <button onClick={this.doMathOperations} type="button" className="orange">-</button>
        <button onClick={this.doMathOperations} type="button">1</button>
        <button onClick={this.doMathOperations} type="button">2</button>
        <button onClick={this.doMathOperations} type="button">3</button>
        <button onClick={this.doMathOperations} type="button" className="orange">+</button>
        <button onClick={this.doMathOperations} type="button" className="span-two">0</button>
        <button onClick={this.doMathOperations} type="button">.</button>
        <button onClick={this.doMathOperations} type="button" className="orange">=</button>
      </div>
    );
  }
}

export default Calculator;
