import React from 'react'
import useCounter from './useCounter';

function Conter2() {
  const [counter, incrementHandler, decrementHandler] = useCounter(10);
  return (
    <div>
      <h3>{counter}</h3>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>
    </div>
  )
}

export default Conter2;