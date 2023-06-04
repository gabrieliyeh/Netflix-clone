import "./navbar.css";
import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

const Navbar = () => {

  const [isScrolled, setIsScrolled]= useState(false)
  window.onscroll = ()=> {
    setIsScrolled(window.scrollY === 0 ? false : true)
    return ()=> window.onscroll = null ;
  }
  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""} `}>
      <div className="container nav-center">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt=""
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My list</span>
        </div>
        <div className="right">
          <SearchOutlinedIcon className="nav-icon" />
          <span> GABBY</span>
          <NotificationsNoneOutlinedIcon className="nav-icon" />
          <img
            src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt="profile identity"
          />
          <div className="profile">
            <ArrowDropDownOutlinedIcon className="nav-icon" />
            <div className="options">
              <span> Settings</span>
              <span> Logout</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
