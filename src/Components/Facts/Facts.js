import './Facts.css'
import { useState, useEffect } from 'react';

export default function Facts() {
    // const [facts, getFacts] = useState([])

    // useEffect(() => {
    //      //async function and useEffect to convert original api to proper json format
    //     const getFacts = async () => {
    //         const apiURL = "http://numbersapi.com/random/math"
    //         try {
    //              // fetch data from link
    //             const res = await fetch(apiURL);
    //             // converting json response into a variable
    //             const data = await res.json();
    //             const objectData = Object.values(facts);
    //             getFacts(objectData);
    //             console.log(data)
    //         } catch (err) {
    //         }
    //     };
    //     getFacts();
    // }, [])
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '321e4cf4f3msh27f4e92b557ee24p10e6adjsn3452d4abb43c',
            'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
        }
    };
    
    fetch('https://numbersapi.p.rapidapi.com/random/math?fragment=true&json=true', options)
        .then(res => res.json())
        .then(res => console.log(res))
        // .catch(err => console.error(err));

    return (
        <h2>Hello</h2>

    )
}