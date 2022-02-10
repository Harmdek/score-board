import { useState } from 'react';
import './App.css';

function displayQuote( count ) {

  let quote = '';

  if(count === 0 ) {
    quote = "Let's start!"
  } else if(count >= 1 && count < 50) {
    quote = "C'mon you can do it"
  } else if(count >= 50 && count < 80) {
    quote = "You've had half"
  } else if(count >= 80 && count < 100) {
    quote = "Almost there!"
  } else if(count === 100) {
    quote = "You nailed it, CONGRATS!"
  }

  return quote
}

function displayColor( count ) {

  let bgColor = '';

  if(count <= 50 ) {
    bgColor = "Red"
  } else if(count > 50 && count < 80) {
    bgColor = "Orange"
  } else if(count >= 80) {
    bgColor = "Green"
  } 

  return bgColor
}


function App() {

  const startValue = 0;
  const [count, setCount] = useState(startValue);
  
  function decCount50Procent() {
    setCount(prevCount => Math.round(prevCount / 100 * 50) )
  }
  function decCount1() {
   setCount(prevCount => prevCount + 1)
  }
  function decCount5() {
    setCount(prevCount => prevCount - 5)
  }

  function countReset() {
    setCount(prevCount => startValue)
  }
  
  function incCount5() {
    setCount(prevCount => prevCount + 5)
  }
  function incCount1() {
    setCount(prevCount => prevCount + 1)
  }
  function incCount50Procent() {
    setCount(prevCount => Math.round(prevCount / 100 * 150 ) )
  }

  let styleVariable = {
    width: `${count}%`,
    background: displayColor(count),
  }

  return (

    <div className='wrapper'>

      <div className='col__title'>

        <h1>Score Board</h1>

      </div>

      <div className='col__progress-bar'>

        <div className='bar'>

          <div className='global-bar'>

            <div className='progress-bar' style={styleVariable}></div>

          </div>

        </div>

        <div className='quote'>

          <p>{ displayQuote(count) }</p>

        </div>

        <div className='amount'>

          <span>{count} / 100</span>

        </div>

      </div>

      <div className='col__buttons'>

        <button disabled={count===0} onClick={decCount50Procent}>- 50 %</button>
        <button disabled={count < 5} onClick={decCount5}>- 5</button>
        <button disabled={count <= 0} onClick={decCount1}>- 1</button>
        <button onClick={countReset}>Reset</button>
        <button disabled={count > 99} onClick={incCount1}>+ 1</button>
        <button disabled={count > 95} onClick={incCount5}>+ 5</button>
        <button disabled={(count / 100 * 150) > 100} onClick={incCount50Procent}>+ 50 %</button>

      </div>

    </div>

  );
}

export default App;
