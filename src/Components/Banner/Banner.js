import React, { useEffect, useState } from 'react'
import { API_KEY , imageUrl} from '../../Constants/Constants'
import './Banner.css'
import axios from '../../axios'
import YouTube from 'react-youtube'

function Banner() {
  const [movie, setMovie]=useState()
  const [urlId,setUrlId]=useState('')
  
  const handleMovie=(id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US&`).then((response)=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log("Array Empty")
      }
    })
  }
  function getRandomItem(arr){
    const randomIndex = Math.floor(Math.random()* arr.length);
    return randomIndex

  }

  const opts={
    height: '390',
    width: '100%',
    playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,},
}

  



  useEffect(()=>{
    axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      const result=getRandomItem(response.data.results);
      setMovie(response.data.results[result])
    })


    

  },[])


  return (
    <div
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path :""})`}}
     className='banner'>
        <div className="content">
          <h1 className="title"> {movie ? movie.original_name :""}{movie ? movie.title: ""}</h1>
          <div className="banner_buttons">
            <button onClick={()=>{
              handleMovie(movie.id)
            }} className="button">Play</button>
            <button className="button">My List</button>
          </div>
          <h1 className="discription">{movie ? movie.overview :""}</h1>
          { urlId &&<YouTube
  videoId={movie.id}                  // defaults -> ''
  
/>}

        </div>
        <div className="fade_bottom"></div>

    </div>
  )
}

export default Banner