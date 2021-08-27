import { useState } from "react"

const TestLabel =(props)=>{
    const [counter,setCount] = useState(0);
    const handleClick =()=>{
        setCount(counter+1)
    }
    return (
        <div>
        <label data-testid="lbl">{props.name}</label>
        <label data-testid="counter">{counter}</label>
        <button data-testid="btn" onClick={handleClick}>Click
        </button>
        </div>
    )
}
export default TestLabel;