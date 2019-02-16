import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className='container'>

      <CalculatorDisplay />

      <div className="buttons">
        <div className="numpad">
          
            <ActionButton action={{ text: 'clear', buttonStyle: 'action' }} />
          
          <div className="row">
            <NumberButton number={{ text: 7, buttonStyle: 'number' }} />
            <NumberButton number={{ text: 8, buttonStyle: 'number' }} />
            <NumberButton number={{ text: 9, buttonStyle: 'number' }} />
          </div>
          <div className="row">
            <NumberButton number={{ text: 4, buttonStyle: 'number' }} />
            <NumberButton number={{ text: 5, buttonStyle: 'number' }} />
            <NumberButton number={{ text: 6, buttonStyle: 'number' }} />
          </div>
          <div className="row">
            <NumberButton number={{ text: 1, buttonStyle: 'number' }} />
            <NumberButton number={{ text: 2, buttonStyle: 'number' }} />
            <NumberButton number={{ text: 3, buttonStyle: 'number' }} />
          </div>
          
            <ActionButton action={{ text: 0, buttonStyle: 'action' }} />
          
        </div>
        <div className="actions">
          <ActionButton action={{ text: '÷', buttonStyle: 'action' }} />
          <ActionButton action={{ text: '×', buttonStyle: 'action' }} />
          <ActionButton action={{ text: '+', buttonStyle: 'action' }} />
          <ActionButton action={{ text: '−', buttonStyle: 'action' }} />
          <ActionButton action={{ text: '=', buttonStyle: 'action' }} />
        </div>
      </div>

    </div>
  );
};

export default App;
