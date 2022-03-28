import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

class App extends React.PureComponent {
  render() {
    return (
      <div className="box">
        <div>
          <h2 className="sub-two">Let us do some math</h2>
          <img src="https://media.giphy.com/media/MB75OzWrpUMOWfBHg0/giphy.gif" alt="gif" height="300" />
        </div>
        <Calculator />
      </div>
    );
  }
}

export default App;
