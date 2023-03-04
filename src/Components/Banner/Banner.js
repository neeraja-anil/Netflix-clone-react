import React, { useEffect, useState } from 'react'
import axios from '../../Axios'
import {API_KEY,imgUrl} from '../../Constants/Constants'
import './Banner.css'

function Banner() {

  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
     
      setMovie(Response.data.results[0])
    
      
    })
  }, [])
  

  return (
    <div className='banner' style={{backgroundImage: `url(${movie ? imgUrl+movie.backdrop_path:""})`}}>
        <div className='content'>
            <h1 className='title'>{movie? movie.name:''}</h1>
            <div className='bannerButtons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie? movie.overview: ""}</h1>
            

        </div>
        <div id="fade"></div>
    </div>
  )
}

export default Banner