import './Facts.css'
import { useState, useEffect } from 'react';

export default function Facts() {
    const [facts, getFacts] = useState([])

    useEffect(() => {
         //async function and useEffect to convert original api to proper json format
        const getFacts = async () => {
            const apiURL = "http://numbersapi.com/random/math"
            try {
                 // fetch data from link
                const res = await fetch(apiURL);
                // converting json response into a variable
                const data = await res.json();
                console.log(data)
                const objectData = Object.values(facts);
                getFacts(objectData);
            } catch (err) {
            }
        };
        getFacts();
    }, [])

    return (
        <h2>{facts}</h2>

    )
}