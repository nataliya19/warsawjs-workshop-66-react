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
          <h1>Counter</h1>
          <span>{counter}</span>
          <div>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <button onClick={reset}>Reset</button>
          </div>
        </div>
    );
}

export default Counter;