import StyledHotel, { Slider } from "../styles/Hotel.styled";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import MailList from "../components/MailList";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../components/reuseables/Button";
import { useState } from "react";
export default function Hotel() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (i) => {
    setSlideIndex(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideIndex;

    if (direction === "l") {
      newSlideIndex = slideIndex === 0 ? 5 : slideIndex - 1;
    } else {
      newSlideIndex = slideIndex === 5 ? 0 : slideIndex + 1;
    }
    setSlideIndex(newSlideIndex);
  };
  const photo = [
    {
      src: "https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    { src: "./places/two.jpg" },
    { src: "./places/three.jpg" },
    { src: "./places/four.jpg" },
    { src: "./places/five.jpg" },
    { src: "./places/footbal.jpg" },
  ];
  return (
    <div>
      <Navbar />
      <Header type={"list"} />
      <StyledHotel>
        {open && (
          <Slider>
            <FontAwesomeIcon
              icon={faCircleXmark}
              onClick={() => setOpen(false)}
              className="close"
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photo[slideIndex].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("l")}
            />
          </Slider>
        )}
        <div className="hotelWrapper">
          <Button
            padding={"10px 20px"}
            background={"#3ac4e5"}
            border={"none"}
            text={"Reserve or Book Now!"}
            position={"absolute"}
            top={"10px"}
            right={"0"}
            color={"#fff"}
            borderR={"5px"}
          />
          <h1 className="hotelTitle"> Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton 5t 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>

          <div className="hotelImages">
            {photo.map((pic, i) => {
              return (
                <div className="hotelImgWrapper">
                  <img
                    onClick={() => handleOpen(i)}
                    src={pic.src}
                    alt="single hotel"
                    className="hotelImg"
                    key={pic[i]}
                  />
                </div>
              );
            })}
          </div>

          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of London</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nostrum, minima doloremque illum doloribus consectetur placeat
                reprehenderit corporis, sint quaerat distinctio tempore corrupti
                voluptatum, magnam unde! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Illo ipsum reprehenderit eveniet obcaecati
                voluptas, aliquid, ad nemo praesentium dolorum odit veniam
                veritatis ab repudiandae aspernatur commodi? Nam adipisci error
                beatae.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect fro a 9-night stay!</h1>
              <span>
                Located in the real heart of London, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <Button
                padding={"10px 20px"}
                background={"#3ac4e5"}
                border={"none"}
                borderR={"5px"}
                color={"#fff"}
                text={"Reserve or Book Now!"}
              />
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </StyledHotel>
    </div>
  );
}
