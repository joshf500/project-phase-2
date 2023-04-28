import React from "react";
import {useEffect,useState} from "react";
import {useNavigate} from 'react-router-dom'
import Search from "./Search";
// import CreateAirlineList from "./CreateAirlineList";

export default function CreateByAirline(){
    const [airlines, setAirlines] = useState([])
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`http://localhost:6001/airlines`)
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

      // const filteredAirlines = airlines.filter((airline) => {
      //   return airline.name.toLowerCase().includes(searchInput.toLowerCase());
      // });
      //console.log(filteredAirlines)

      //const filteredlist = setAirlines(filteredAirlines)
      function CreateAirlineList({airlines}){
        return (
            <ul>
        {airlines.map((airline) => {
            console.log(airline.logo);
        return(
        <span class="options" key={airline.id} onClick={()=>{navigate('/newreviewform',{state:{selected: airline.name}});}} >
            <img src={airline.logo}/>
            <p>{airline.name}</p>
        </span>   
        )
        })}
          </ul>
        )
      }
       const filteredAirlines = airlines.filter((airline) => {
        return airline.name.toLowerCase().includes(searchInput.toLowerCase());
      });
    return(
        <>
            <main>
                <h2>Airlines</h2>
                <Search searchInput={searchInput} onSearch={onSearch} />
                <CreateAirlineList airlines={filteredAirlines}/>
            </main>

        </>
    )
}
