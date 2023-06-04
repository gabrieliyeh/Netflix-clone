import "./feature.css"
import React from 'react'
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Feature = ({type}) => {
    return (
      <section className="feature">
        <div className="container">
          {type && (
            <div className="category">
              <span> {type === "movies" ? "Movies" : "Series"}</span>
              <select name="genre" id="genre">
                <option>Genre</option>
                <option value="adventure">Adventure</option>
                <option value="comedy">Comedy</option>
                <option value="crime">Crime</option>
                <option value="fantasy">Fantasy</option>
                <option value="historical">Historical</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
                <option value="sci-fi">Sci-fi</option>
                <option value="thriller">Thriller</option>
                <option value="western">Western</option>
                <option value="animation">Animation</option>
                <option value="drama">Drama</option>
                <option value="documentary">Documentary</option>
              </select>
            </div>
          )}
          <div className="info ">
            <img
              src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
              alt="feature-1"
            />
            <span className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus quam totam accusamus reiciendis ratione in ex
              deleniti aliquid, a adipisci!
            </span>
            <div className="buttons-container">
              <button className="play">
                <PlayArrowOutlinedIcon />
                <span>play</span>
              </button>
              <button className="more">
                <InfoOutlinedIcon />
                <span>Info</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Feature
