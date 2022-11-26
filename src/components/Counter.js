import './Counter.css';

import {useState} from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    //increase counter
    const increase = () => {
        setCounter(count => count + 1);
    };

    //decrease counter, make the minimum value 0
    const decrease = () => {
        if (counter > 0) {
            setCounter(count => count - 1);
        }
    };

    //reset counter
    const reset = () =>{
        setCounter(0)
    }

    return (
        <div>
          <h1 className="counter">Counter</h1>
          <span data-testid="counter">{counter}</span>
          <div>
            <button  data-testid="increase-button" onClick={increase}>+</button>
            <button data-testid="decrease-button" onClick={decrease}>-</button>
            <button data-testid="reset-button" onClick={reset}>Reset</button>
          </div>
        </div>
    );
}

export default Counter;