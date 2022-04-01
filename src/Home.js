


const Home = () => {
   

    let imagearr=[
        {image:"https://m.media-amazon.com/images/I/61TmTeUDrpS._AC_SX522_.jpg"},
        {image: "https://m.media-amazon.com/images/I/91NkeXbjWOL._AC_UL320_.jpg"},
        {image:"https://media.istockphoto.com/vectors/frame-for-photos-with-inscription-friends-forever-for-laser-cutting-vector-id971550332?k=20&m=971550332&s=170667a&w=0&h=8F7FT8Dm5DOG7MnMkb7PCMmz0Cu6LZ1Lr73-ZfBPJu4="},
        {image:"https://i.pinimg.com/originals/75/3f/6e/753f6ec9dec7a20b0aa27c93aa38f218.jpg"}
    ]
    
     
                       
    return ( 
        <div className="data">
            <div className="popular_movies">
                {
                    imagearr.map((val)=>{
                        return (<img src={val.image} alt="" height="250px" width="250px"/>)
                    })
                }
            </div>
            {/* <div className="popular_movies">
                <a href="https://w
ww.youtube.com/watch?v=t6e4f-3cUAk&t=5s" target="_blank"> <img src="https://m.media-amazon.com/images/I/61TmTeUDrpS._AC_SX522_.jpg" alt="" width={300} height={250}/></a>
                <img src="https://m.media-amazon.com/images/I/91NkeXbjWOL._AC_UL320_.jpg" alt="" width={300} height={250}/>
                <img src="https://media.istockphoto.com/vectors/frame-for-photos-with-inscription-friends-forever-for-laser-cutting-vector-id971550332?k=20&m=971550332&s=170667a&w=0&h=8F7FT8Dm5DOG7MnMkb7PCMmz0Cu6LZ1Lr73-ZfBPJu4=" alt="" width={300} height={250}/>
                <img src="https://i.pinimg.com/originals/75/3f/6e/753f6ec9dec7a20b0aa27c93aa38f218.jpg" alt="" width={300} height={250}/>
            </div> */}
            <br />
            
        <br />
        
        </div>
         );
}

export default Home;