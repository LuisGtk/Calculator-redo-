import './Calc.css';

export default function Calc() {


    return (
        // making calc
        <div className="calculator">

            <div className="display">
                <p>"this is the display"</p>
            </div>

            <div className="answer">
                <p> this will be the answer to the equation</p>
            </div>

            <div className='layout'>
                <button >Clear</button>
                <button >+/-</button>
                <button >%</button>
                <button >/</button>

                <button  >7</button>
                <button >8</button>
                <button >9</button>
                <button >*</button>

                <button >4</button>
                <button >5</button>
                <button >6</button>
                <button >-</button>

                <button >1</button>
                <button >2</button>
                <button >3</button>
                <button >+</button>

                <button >0</button>
                <button >.</button>
                <button >=</button>
            </div >
        </div >
    )
}