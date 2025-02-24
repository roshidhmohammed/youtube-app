import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { GOOGLE_API_KEY, YOUTUBE_API } from '../utils/constants'
import {Link} from "react-router-dom"

const VideoContainer = () => {
const [videosData, setVideosData] = useState([])
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData = async()=>{
   const data =await fetch(YOUTUBE_API)
    const json  =await data.json()
    setVideosData(json.items)
  }
  return (
  <div className='  mx-auto px-4 md:px-8 lg:px-12'>
      <div className=' grid  grid-flow-row  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   lg:gap-8 gap-0  mt-10 lg:mx-10'>
      {videosData?.map((video)=> (
  
<Link to={"/"} key={video?.id}  className=' ' >
      
      <VideoCard video={video}/>
            </Link>
      ))}

    </div>
  </div>
  )
}

export default VideoContainer