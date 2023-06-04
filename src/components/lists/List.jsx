import "./list.css"
import React, {useRef, useState} from 'react'
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ListItem from "../list-item/ListItem";

const List = () => {
    const listRef = useRef()
    const bodyRef = useRef()
    const [sliderNumber, setSliderNumber]= useState(0)
    const [isMoved, setIsMoved]= useState(false)

    const handleSlider = (direction)=> {
      setIsMoved(true)
        const distance =
          listRef.current.getBoundingClientRect().x - bodyRef.current.getBoundingClientRect().x;
        if(direction === 'left' && sliderNumber > 0) {
          setSliderNumber((prevState)=> (prevState - 1))
            listRef.current.style.transform = ` translateX(${230 + distance}px)`
        } if (direction === 'right' && sliderNumber < 5) {
          setSliderNumber((prevState)=> (prevState + 1))
              listRef.current.style.transform = ` translate(${
                -230 + distance
              }px)`;
        }
    } 
  
  return (
    <section  className="list">
      <div ref={bodyRef} className="container">
        <span className="list-title">Continue to watch</span>
        <div className="wrapper">
          <ArrowBackIosOutlinedIcon onClick= {()=> handleSlider('left')} className="slider-arrow left" style={{display: !isMoved && 'none'}} />
          <div ref={listRef} className="movie-container">
            <ListItem index={0} ref= {bodyRef} />
            <ListItem index={1} ref= {bodyRef} />
            <ListItem index={2} ref= {bodyRef} />
            <ListItem index={3} ref= {bodyRef} />
            <ListItem index={4} ref= {bodyRef}  />
            <ListItem index={5} ref= {bodyRef}  />
            <ListItem index={6} ref= {bodyRef}  />
            <ListItem index={7} ref= {bodyRef} />
            <ListItem index={8} ref= {bodyRef}  />
            <ListItem index={9} ref= {bodyRef} />
          </div>
          <ArrowForwardIosOutlinedIcon onClick= {()=> handleSlider('right')} className="slider-arrow right" />
        </div>
      </div>                                         
    </section>
  );
}

export default List