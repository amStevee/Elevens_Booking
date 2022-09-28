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
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useHotel } from "../hooks/useData";
import { SearchContex } from "../contex/searchContex";
import { AuthContex } from "../contex/AuthContext";
import Modal from "../components/ReservationModal";

export default function Hotel() {
  const location = useLocation();
  const path = location.pathname.split("/", [3]);
  const id = path[2];
  const [slideIndex, setSlideIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { isLoading, data, isError, error, isFetching } = useHotel(id);
  const items = data;

  const { date, options } = useContext(SearchContex);
  const { user } = useContext(AuthContex);
  const navigate = useNavigate();

  //CALCULATES HOW MANY DAYS
  const MILISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDay = Math.ceil(timeDiff / MILISECONDS_PER_DAY);
    return diffDay;
  }

  const days = dayDifference(date[0].endDate, date[0].startDate);

  if (isFetching) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    throw error;
  }

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

  console.log(user);

  const handleOption = () => {
    if (user) {
      setOpenModal(true);
      console.log("toggling");
    } else {
      navigate("/login");
    }
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
      {isLoading ? (
        "loading..."
      ) : (
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
                <img
                  src={items.data.data.userimage[slideIndex]}
                  alt=""
                  className="sliderImg"
                />
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
              handleOption={handleOption}
            />
            <h1 className="hotelTitle"> {items.data.data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{items.data.data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent location - {items.data.data.distance}m from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ${items.data.data.cheapestprice} at this property
              and get a free airport taxi
            </span>

            <div className="hotelImages">
              {items.data.data.userimage?.map((pic, i) => {
                return (
                  <div className="hotelImgWrapper">
                    <img
                      onClick={() => handleOpen(i)}
                      src={pic}
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
                <h1 className="hotelTitle">{items.data.data.title}</h1>
                <p className="hotelDesc">{items.data.data.description}</p>
                {console.log(items.data.data)}
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect fro a {days}-night stay!</h1>
                <span>
                  Located in the real heart of London, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>${days * items.data.data.cheapestprice * options.room}</b>{" "}
                  ({days} nights)
                </h2>
                <Button
                  padding={"10px 20px"}
                  background={"#3ac4e5"}
                  border={"none"}
                  borderR={"5px"}
                  color={"#fff"}
                  text={"Reserve or Book Now!"}
                  handleOption={handleOption}
                />
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </StyledHotel>
      )}
      {openModal && <Modal setOpenModal={setOpenModal} hotelId={id} />}
    </div>
  );
}
