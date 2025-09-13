import React, { useState } from 'react'
import './HomePage.css'
import { useNavigate } from 'react-router-dom'
import image from './image.png';



const HomePage = () => {
const navigate = useNavigate()

  const [roomId , setRoomId] = useState("")
  const handleRoomIdGenerate = ()=>{
    const randomId = Math.random().toString(36).substring(2,9);
    const timestamp =Date.now().toString().substring(-4);
    setRoomId(randomId + timestamp)
  }

  const handleOneAndOnecall=()=>{
    if (!roomId) {
      alert("please generate room id ")
      return
    }
    navigate(`room/${roomId}?type=one-on-one`)
  }
  const handleGroupcall=()=>{
    if (!roomId) {
      alert("please generate room id ")
      return
    }
    navigate(`room/${roomId}?type=Group call`)
  }
  return (
     
    <div className='homepage-container'>
    
      <div className="homepage-content">
        <h1 className="homepage-title">Welcome to video calling App</h1>
        <p className="homepage-subtitle">
          start a video call with a randomly generated room id
        </p>
        <div className='room-id-container'>
          <input type="text" className='room-id-input' value={roomId} placeholder='generated room id ' readOnly />
          <button className='generate-button' onClick={handleRoomIdGenerate}>Genertate</button>
        </div>
        <div className='call-buttons'>
          <button className='call-button' onClick={handleOneAndOnecall} disabled={!roomId}>one-on-one call</button>
          <button className='call-button' onClick={handleGroupcall} disabled={!roomId}>group call</button>

        </div>
      </div>
    </div>
  )
}

export default HomePage