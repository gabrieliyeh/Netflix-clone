import "./home.css"
import React, {useEffect} from 'react'
import Navbar from "../../components/navbar/Navbar"
import Feature from "../../components/feature/Feature";
import List from "../../components/lists/List";
import AOS from "aos"
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
   AOS.init()
  }, [])
  
    return (
      <>
        <main 
        className="home">
          <Navbar  />
          <Feature/>
          <List/>
          <List/>
          <List/>
        </main>
      </>
    );
}

export default Home
