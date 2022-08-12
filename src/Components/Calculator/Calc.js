import './Calc.css';
import { useState, useEffect } from 'react';

export default function Calc() {
    const [data, getData] = useState([])
    // useEffect(() => {
    //     const getData = async () => {
    //         const apiURL = 'http://api.mathjs.org/v4/?expr=4-4'
    //         try {
    //             const response = await fetch(apiURL);
    //             const data = await response.json();
    //             const objectData = Object.values(data);
    //             getData(objectData);
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     };
    //     getData()
    // }, [])

    const fetchData = () => {
        fetch("https://api.mathjs.org/v4/?expr=" + encodeURIComponent(data))
            .then((response) => response.json())
            .then((data) => getData(data));
    }


    function handleClick(event) {
        //console.log(event.target.innerText)
        getData(data + event.target.innerText)
    }





    /* ADDING STATE */
    // const [equation, setEquation] = useState('')
    // const [total, setTotal] = useState("")

    return (
        // making calc
        <div className="calculator">

            <div className="display">
                <p>"this is the display"</p>
            </div>

            <div className="answer">
                <p> this will be the answer to the equation {data}</p>

            </div>

            <div className='layout'>
                <button >Clear</button>
                <button >+/-</button>
                <button onClick={handleClick}>%</button>
                <button onClick={handleClick}>/</button>

                <button onClick={handleClick} >7</button>
                <button onClick={handleClick}>8</button>
                <button onClick={handleClick}>9</button>
                <button onClick={handleClick}>*</button>

                <button onClick={handleClick}>4</button>
                <button onClick={handleClick}>5</button>
                <button onClick={handleClick}>6</button>
                <button onClick={handleClick}>-</button>

                <button onClick={handleClick}>1</button>
                <button onClick={handleClick}>2</button>
                <button onClick={handleClick}>3</button>
                <button onClick={handleClick}>+</button>

                <button onClick={handleClick}>0</button>
                <button onClick={handleClick}>.</button>
                <button onClick={getData}>=</button>
            </div >
        </div >
    )
}