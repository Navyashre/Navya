
const Ser = (props) => {
        let setMovie=props.data;
        let title=props.pagetitle;
        let clickImage=props.delete;
        return (  <div className="seriesList">
            <h1 style={{color:"midnightblue", textAlign: "center"}}>{title}</h1>
        {setMovie.map((val)=>{
            return(
                    <div className="class"><br />
                    <h1>{val.Name}</h1><br />
                    <h6>{val.HeroName}</h6><br />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTww_iBva1UX84OMy5m7Vc05rqMy55dMcBshw&usqp=CAU" alt="" width={25} onClick={()=>clickImage(val.id)}/>
                    </div>
            )
        })}
    </div>);
    }
     
    export default Ser;