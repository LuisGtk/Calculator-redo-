import './Facts.css'
import { useState } from 'react';
export default function Facts() {
    const [facts, getFacts] = useState([])
    
    const fetchData = () => {
        fetch("http://numbersapi.com/random/math")
            .then((response) => response.json())
            .then((data) => getFacts(data));
    }
    return(
        <h2>hello world</h2>
        
    )
}