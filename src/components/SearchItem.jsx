import Button from "./reuseables/Button";
import StyeledSearchItem from "../styles/SearchItem";
import { Link } from "react-router-dom";

export default function SearchItem({ item }) {
  return (
    <StyeledSearchItem>
      <img src={item.userimage} alt="hotel" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <Button
              border={"none"}
              color={"#fff"}
              padding={"5px"}
              background={"#343e61"}
              text={item.rating}
            />
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestprice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item.id}`}>
            <Button
              background={"#3ac4e5"}
              borderR={"5px"}
              border={"none"}
              padding={"10px 5px"}
              color={"#fff"}
              text={"See availability"}
            />
          </Link>
        </div>
      </div>
    </StyeledSearchItem>
  );
}
