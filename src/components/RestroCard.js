import { faStar } from "@fortawesome/free-solid-svg-icons"; // Corrected import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CDN_URL } from "../utils/constant";
const RestroCard = (props) => {
    //destructuring 
    const { info } = props.resData;
    const { name, cuisines, avgRating, sla, cloudinaryImageId } = info;
    return (
      
      <div className="rest-card" style={{ background: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL+cloudinaryImageId}
        ></img>
        <div className="content">
          <h3>{name}</h3>
          <span>
            <FontAwesomeIcon icon={faStar} />
            {avgRating}
          </span>
          <span style={{ float: "right", paddingRight: "30px" }}>
            {sla.slaString}
          </span>
          <h5>{cuisines.join(", ")}</h5>
          <h5 style={{textAlign:"right", margin:"10px"}}>{props.resData.info.costForTwo}</h5>
        </div>
      </div>
    );
  };

  export default RestroCard;