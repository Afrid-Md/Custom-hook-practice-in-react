import React,{useState} from 'react'

function useCounter(value) {
    const[counter, setCounter] = useState(value);

    const incrementHandler =()=>{
      setCounter((prev) => prev+1)
    }
    const decrementHandler =()=>{
      setCounter((prev) => prev-1)
    }
  return [counter, incrementHandler, decrementHandler]
}

export default useCounter
