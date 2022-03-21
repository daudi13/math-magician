import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Buttons from './ButtonInfo';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const doMathOperations = ({ currentTarget: btn }) => {
    const buttonName = btn.outerText;
    const object = calculate(state, buttonName);
    setState({ ...state, ...object });
  };

  const { next, total } = state;
  return (
    <div className="calc-grid">
      <div className="output">
        <div className="cur-operand">{ total && next ? next : total || next || 0 }</div>
      </div>
      {Buttons().map((button) => (
        <button
          type="button"
          key={button.name}
          className={button.className}
          onClick={doMathOperations}
        >
          {button.name}
        </button>
      ))}
    </div>
  );
};

export default Calculator;
