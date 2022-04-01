import Ser from "./serieslist";
import { useEffect, useState } from "react";


const Add = () => {
    // let [name,setName]=useState([])
    fetch(" http://localhost:7000/series")
    .then(res =>{
      return res.json();
    })
    .then(data =>{
      setData(data)
    })
    // function handleClick(){
    //   setName("king")
    // }
    let [setMovie, setData]=useState(
        [
            {
                Name:"Jems",
                HeroName:"Punith",
                Song:"Title Song",
                language:"English",
                id:1
            },
            {
                Name:"Yajamana",
                HeroName:"Darshan",
                Song:"Ondu mumnjane",
                language:"Kannada",
                id:2
            },
            {
                Name:"Pailwan",
                HeroName:"Sudeep",
                Song:"Kannamaniye",
                language: "Hindi",
                id:3
            }
        ]
    )
    let clickImage = (id)=>{
        setData(setMovie.filter((val)=>val.id !=id)) 
       }

       useEffect(()=>{
        console.log("it worked...");
      },[])                 //name or seriesData
       
    return ( 
        <div>
         <Ser data={setMovie} pagetitle="Popular movies" delete={clickImage}/>
         <Ser data={setMovie.filter((value)=>value.language=="English")} pagetitle="Popular English movies"/>
      
        {/* <button onClick={handleClick}></button> */}
        </div>
     );
}
 
export default Add;