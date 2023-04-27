import React from "react"; 
import {useEffect,useState} from "react";
//import {useNavigate} from 'react-router-dom'
import { Link, Route, Routes } from 'react-router-dom'
import ReviewsList from "./ReviewsList";
import Search from "./Search";
import ViewAirlineList from "./ViewAirlineList";


export default function ViewByAirline(){
    const [airlines, setAirlines] = useState([])
    const [searchInput, setSearchInput] = useState("");
    
    useEffect(() => {
        fetch(`http://localhost:4001/airlines`)
          .then(res => res.json())
          .then(data => {
            setAirlines(data)
           })
      }, []);
      
      function onSearch(input) {
        console.log(input);
        setSearchInput(input);
        
        // setAirlines(airlines);
      }

      const filteredAirlines = airlines.filter((airline) => {
        return airline.name.toLowerCase().includes(searchInput.toLowerCase());
      });
      //console.log(filteredAirlines)
      
      //const filteredlist = setAirlines(filteredAirlines)
    
    return(
        <>
            <main>
                <h2>Airlines</h2>
                <Search searchInput={searchInput} onSearch={onSearch} />
                <ViewAirlineList airlines={filteredAirlines}/>
                
            </main>
            
        </>
    )
}
