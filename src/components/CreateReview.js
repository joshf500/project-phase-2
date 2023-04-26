import {React, useState, useEffect, createContext} from "react"; 
import {useNavigate} from 'react-router-dom'

export const MyContext = createContext({
    selected: []
})
export default function CreateReview(){
    const navigate = useNavigate()
    const [airlines, setAirlines] = useState([])
    const [selected, setSelected]= useState("")
    

   
    useEffect(() => {
        fetch(`http://localhost:4001/airlines`)
          .then(res => res.json())
          .then(data => {
            setAirlines(data)
           })
      }, []);
  
    return(
        <MyContext.Provider selected={selected}>
            <main>
                <h2>Airlines</h2>

                {airlines.map((airline) => {
                return (
                <img onClick={()=>{setSelected(airline.title); navigate('/newreviewform')}} 
                key={airline.id} name= {selected} src={airline.logo}
                />)})}
            </main>
        </MyContext.Provider>
    )
}
            {/* // <img >
            //     class= "American Airlines"
            // onClick={() => {navigate('/newreviewform')}}
            // src="https://s21.q4cdn.com/616071541/files/multimedia-gallery/assets/Logos/american-airlines/THUMB-aa_aa__vrt_rgb_grd_pos.png"
            // >
            // </img>
            // <img
            // class= "Qatar Airways"
            // onClick={() => {navigate('/newreviewform')}}
            // src ="https://seeklogo.com/images/Q/qatar-airways-logo-E096F45AE3-seeklogo.com.png"
            // >
            // </img> */}
      

