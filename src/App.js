import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

class App extends React.PureComponent {
  render() {
    return (
      <div className="box">
        <div>
          <h2 className="sub-two">Let us do some math</h2>
          <div className="blackboard" />
        </div>
        <Calculator />
      </div>
    );
  }
}

export default App;
