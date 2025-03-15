import { useState } from 'react';
import './App.css';

function App() {
  //      counter    function
  const [counter, setCounter] = useState(5); //default value of state can be anything even a object and string too  | 'setCounter' is a function which is responsible for updation of 'counter'

  // let counter = 5;

  const addValue = () => {
    // if(counter === 10) return
    // console.log("Value added", counter);
    // counter += 1   //counter will be updated but problems comes in UI updation

    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // so aboe code will not add 5, it will add only 1 value, cause send request in patches
    // recall react fibre or diffing algo or reconciliation
    // Inteview Question
    //

    // Another way to increase 5 value at once
    // 'setCounter give callback function' all state may expect a callback
    setCounter((prevCounter) => {
      return prevCounter + 1;
    }); //same as below
    setCounter((prevCounter) => prevCounter + 1); // arrow do have implicit return functionality
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((counter) => counter + 1);
    // All are the similar way
  };

  const subtractValue = () => {
    if (counter === 0) return;
    console.log('Value removed', counter);

    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai aur Vinay</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={subtractValue}>Subtract value</button>
    </>
  );
}

export default App;
