import React, { useState } from "react";
import "./list-item.css";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import {useNavigate} from "react-router-dom"

const ListItem = React.forwardRef(({ index }, ref) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate()
  const trailer =
    "https://player.vimeo.com/external/559560916.sd.mp4?s=05910a54129d4b5e0fc0e30670226757661fa74f&profile_id=164&oauth2_token_id=57447761";

    const handleWatch = () => {
      navigate("watch")
    }

  return (
    <article
      className="list-item"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleWatch}
    >
      <img
        src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay loop />
          <div className="item-info">
            <div className="icons">
              <PlayArrowOutlinedIcon className="icon" />
              <AddOutlinedIcon className="icon" />
              <ThumbUpOutlinedIcon  className="icon"/>
              <ThumbUpDownOutlinedIcon className="icon" />
            </div>
            <div className="item-info-top">
              <span> 1 hour 14 mins</span>
              <span className="limit"> +16</span>
              <span>1999</span>
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nisi
              quidem ratione consequatur error repudiandae vitae? Animi placeat
              accusamus commodi
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </article>
  );
});

export default ListItem;
