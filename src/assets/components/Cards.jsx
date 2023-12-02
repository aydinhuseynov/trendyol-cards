import "../style/cards.css";
import TrendyolPicture from "../../images/trend.webp";
import { FaRegStar } from "react-icons/fa6";
import { IoCamera } from "react-icons/io5";

const Cards = ({Title,Information,Number,OffPrice,Price}) => {
  return (
    <>
      <div className="main-cards ">
        <div className="picture">
          <img src={TrendyolPicture} alt="" />
        </div>
        <p className="text ">{Title}</p>
        <p className="maintext">{Information}</p>
        <FaRegStar className="star" /> <FaRegStar className="star" />
        <FaRegStar className="star" />
        <FaRegStar className="star" /> <p className="number">({Number})</p>
        <IoCamera className="camera" />
        <i className="bi bi-star"></i>
        <p className="price">
          <span className="off">{OffPrice} </span>{Price} 
        </p>
      </div>
    </>
  );
};

export default Cards;
