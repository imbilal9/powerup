import React, {Component} from 'react'
import babav from "../assets/videobabaki.mp4"
import ReactPlayer from 'react-player'
const Videoplay = () => {
  return (
    <div>
        <ReactPlayer
        url={babav}
        width='100%'
        height='100%'
        controls={true}
        />
    </div>
  )
}

export default Videoplay;