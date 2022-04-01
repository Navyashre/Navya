import { useState } from 'react';
import image from './images/friends.avif';


import { useHistory } from 'react-router-dom';


const Saved = () => {
    let history = useHistory();
    let [Name,setName]=useState("")
    let [HeroName,setHeroName]=useState("")
    // let[Cast,setCast]=useState("")


    let handleSubmit =(e) =>{
        e.preventDefault();
        let data={Name,HeroName}
        //fetch the added data to json
        fetch("http://localhost:7000/series",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(()=>{
            alert('data added successfully')
            history.push('./add')
        })

    }
    return ( 
        <div className="add-form " >
             <form onSubmit={handleSubmit}>
                 <label htmlFor="">Title</label><br />
                    <input type="text" required
                    value={Name}
                    onChange={(e)=>{setName(e.target.value)}}
                     />
                    <br />
                <label htmlFor="">Genre</label><br />
                   <input type="text" required
                   value={HeroName}
                   onChange={(e)=>{setHeroName(e.target.value)}}
                   />
                   <br />
                {/* <label htmlFor="">Cast</label><br />
                   <input type="text" required
                   value={Cast}
                   onChange={(e)=>{setCast(e.target.value)}} 
                   /> */}
                   <br />
                <button  >submit</button>
             </form>
             <div>
                 <h1>{Name}</h1>
             </div>
        </div> 
        );
}
 
export default Saved;