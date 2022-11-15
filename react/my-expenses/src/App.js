import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [displayValue1, setDisplayValue1] = useState('');
  const [displayValue2, setDisplayValue2] = useState('');

  return (
    <div className="App" style={{margin: '50px'}}>
      <h1>My Expenses</h1>
      <p>List: [{displayValue1}]</p>
      <p>Sum: {displayValue2}</p>
      <form>
        <div>
          <label style={{paddingRight: '10px'}}>Name</label>
          <input onChange={(event) => {
            setInputValue1(event.target.value);
          }}/>
        </div>
        <div style={{marginTop: '20px'}}>
          <label style={{paddingRight: '21px'}}>Cost</label>
          <input onChange={(event) => {
            setInputValue2(event.target.value);
          }}/>
        </div>
        <div style={{marginTop: '20px'}}>
          <button type='button' onClick={() => {
            setDisplayValue1(inputValue1);
            setDisplayValue2(inputValue2);
          }}>Add</button>
        </div>  
      </form>
    </div>
  );
  
}

export default App;
