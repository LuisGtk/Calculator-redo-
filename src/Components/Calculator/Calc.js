import './Calc.css';
import { useState} from 'react';

export default function Calc() {
    const [data, getData] = useState([])
    const [total, setTotal] = useState("");
    const fetchData = () => {
        fetch("https://api.mathjs.org/v4/?expr=" + encodeURIComponent(data))
            .then((response) => response.json())
            .then((data) => getData(data));
    }
// functionality for number buttons
    function handleClick(event) {
        getData(data + event.target.innerText)
    }
//clear button functionality
function handleClear(event) {
    getData('')
    setTotal('')
}


    return (
        // making calc
        <div className="calculator">

            <div className="display">
                <p>{data}</p>
            </div>
            <div className='layout'>
                <button className='numbers' onClick={handleClear}>Clear</button>
                <button className='numbers'onClick={handleClick}>%</button>
                <button className='numbers'onClick={handleClick}>/</button>

                <button className='numbers'onClick={handleClick} >7</button>
                <button className='numbers'onClick={handleClick}>8</button>
                <button className='numbers'onClick={handleClick}>9</button>
                <button className='numbers'onClick={handleClick}>*</button>

                <button className='numbers'onClick={handleClick}>4</button>
                <button className='numbers'onClick={handleClick}>5</button>
                <button className='numbers'onClick={handleClick}>6</button>
                <button className='numbers'onClick={handleClick}>-</button>

                <button className='numbers'onClick={handleClick}>1</button>
                <button className='numbers'onClick={handleClick}>2</button>
                <button className='numbers'onClick={handleClick}>3</button>
                <button className='numbers'onClick={handleClick}>+</button>

                <button className='numbers'onClick={handleClick}>0</button>
                <button className='numbers'onClick={handleClick}>.</button>
                <button className='numbers'onClick={fetchData}>=</button>
            </div >
        </div >
    )
}