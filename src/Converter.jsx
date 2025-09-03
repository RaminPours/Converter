import { useState } from 'react'



export default function Converter() {

const [inputValue, setInputValue] = useState('');
const [inputUnit, setInputUnit] = useState('seconds');
const [outputUnit, setOutputUnit] = useState('minutes');
const [result, setResult] = useState("");


const handleInputChange = (e) => {
  setInputValue(e.target.value);
}
const handleInputUnitChange = (e) => {
  setInputUnit(e.target.value);
}
const handleOutputUnitChange = (e) => {
    setOutputUnit(e.target.value);
}


const handleConvert = () => {
  let value = parseFloat(inputValue);
    if (isNaN(value)) {
        setResult("Please enter a valid number");
        return;
    }


    let seconds;
    // Convert input to seconds
    if (inputUnit === 'seconds') {
        seconds = value;
    } else if (inputUnit === 'minutes') {
        seconds = value * 60;
    } else if (inputUnit === 'hours') {
        seconds = value * 3600;
    }


    let outputValue;
    // Convert seconds to output unit
    if (outputUnit === 'seconds') {
        outputValue = seconds;
    } else if (outputUnit === 'minutes') {
        outputValue = seconds / 60;
    } else if (outputUnit === 'hours') {
        outputValue = seconds / 3600;
    }
    setResult(`${inputValue} ${inputUnit} ⏩ ${outputValue} ${outputUnit}`);
}


return(
    
    <div className="converter"> 
        <input 
            type="number" 
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter a number"
        />

        <select value={inputUnit} onChange={handleInputUnitChange}>
            <option value="seconds">Seconds</option>
            <option value="minutes">Minutes</option>
            <option value="hours">Hours</option>
        </select>

        <span> ➡ </span>

        <select value={outputUnit} onChange={handleOutputUnitChange}>
            <option value="seconds">Seconds</option>
            <option value="minutes">Minutes</option>
            <option value="hours">Hours</option>
        </select>

        <button onClick={handleConvert}>Convert</button>
        <p className="result">{result}</p>
    </div>
    
);
}