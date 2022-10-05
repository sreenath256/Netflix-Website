import React,{useState, useEffect} from 'react'
import './Rowpost.css'
import axios from '../../axios'
import {  API_KEY, imageUrl } from '../../Constants/Constants'
import YouTube from 'react-youtube'
function Rowpost(props) {
    const [movie, setMovie]=useState([])
    const [urlId,setUrlId]=useState('')

    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            setMovie(response.data.results)

        })
    },[])

    const handleMovie=(id)=>{
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US&`).then((response)=>{
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
                
            }else{
                console.log("Array Empty")
            }
        })

    }
    const opts={
        height: '390',
        width: '100%',
        right:'1',
        playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,},
    }

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
            { movie.map((obj)=>
                <img onClick={()=>{
                    handleMovie(obj.id)
                }} className={props.isSmall ? 'smallposter' :'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
            )}
            
            
        </div>
        { urlId &&<YouTube videoId={urlId.key} title={false} onPause={false} opts={opts}  />}
    </div>
  )
}

export default Rowpost