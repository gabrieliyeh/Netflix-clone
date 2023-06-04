import React from 'react'
import "./watch.css"
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import {useNavigate} from "react-router-dom"

const Watch = () => {
    const navigate = useNavigate()

    const handleNavigation = ()=> {
        navigate(-1)
    }

  return (
    <main className='watch'>
        <div className="back" onClick={handleNavigation}>
            <ArrowBackOutlinedIcon/>
            <span> 
            home
            </span> 
        </div>
        <video className='video' autoPlay controls 
        src="https://player.vimeo.com/external/210741487.sd.mp4?s=f3bacb23e5791a132f2576ed2b935bd229ec0247&profile_id=164&oauth2_token_id=57447761"
        />
    </main>
  )
}

export default Watch