import { useState } from 'react'
import React from 'react'
import useCounter from './useCounter';

function Conter1() {
  const [counter, incrementHandler, decrementHandler] = useCounter(0);
  return (
    <div>
      <h3>{counter}</h3>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>
    </div>
  )
}

export default Conter1;

