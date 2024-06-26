import { useState } from "react"


const Counter = () => {
    const [counter, setCounter] = useState(0)
     const handleIncreament = () => {
        setCounter(prevCount => prevCount + 1)

     }


     const downIncreament = () => {
        if(counter > 0){
            setCounter(prevCount => prevCount -1);

        }
     }
  return (
    <>
     <button  onClick={handleIncreament}>+</button>
    <span>{counter}</span>
    <button  onClick={downIncreament}>-</button>
    
    </>
  )
}

export default Counter