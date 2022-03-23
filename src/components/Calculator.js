import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Buttons from './ButtonInfo';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const doMathOperations = (btn) => {
    const buttonName = btn.name;
    const object = calculate(state, buttonName);
    setState({ ...state, ...object });
  };

  const { next, total } = state;
  return (
    <div className="calc-grid">
      <div className="output">
        <div className="cur-operand">{ total && next ? next : total || next || 0 }</div>
      </div>
      <Buttons checkOperation={doMathOperations} />
    </div>
  );
};

export default Calculator;
