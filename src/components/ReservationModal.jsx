import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import StyledModal from "../styles/Modal.styled.js";
import { useRoom } from "../hooks/useData.js";
import { useState } from "react";
import { useContext } from "react";
import { SearchContex } from "../contex/searchContex.js";
import Button from "./reuseables/Button.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Modal({ setOpenModal, hotelId }) {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { isLoading, data, isError, error, isFetching, refetch } =
    useRoom(hotelId);
  const { date } = useContext(SearchContex);
  const navigate = useNavigate();
  if (isFetching || isLoading) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    throw error;
  }
  const getDateInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start);
    let list = [];
    while (date <= end) {
      list.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return list;
  };

  const allDates = getDateInRange(date[0].startDate, date[0].endDate);
  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailabledate.some((date) =>
      allDates.includes(new Date(date).getTime)
    );
    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(
            `http://localhost:5000/api/rooms/availability/${roomId}`,
            { date: allDates, id: hotelId }
          );
          return res.data;
        })
      );

      refetch();
      // console.log(console.log(!isAvailable(data.data[0].room_numbers[0])));
      setOpenModal(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledModal>
      <div className="rcontainer scale-up-center">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpenModal(false)}
        />
        <span>Select your rooms:</span>
        {data.data.map((item) => (
          <div className="rItem" key={item.id}>
            <div className="rInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.description}</div>
              <div className="rMax">
                Max people: <b>{item.max_people}</b>
              </div>
              <div className="rPrice">{item.price}</div>
            </div>
            <div className="selectRooms">
              {item.room_numbers.map((roomNumber) => (
                <div className="room">
                  <label>{roomNumber.numbers}</label>
                  <input
                    type="checkbox"
                    value={roomNumber.id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}
                    id=""
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <Button
          text={"Reserve Now"}
          padding={"10px"}
          background={"#3acae5"}
          border={"none"}
          width={"100%"}
          borderR={"5px"}
          color={"#fff"}
          handleOption={handleClick}
        />
      </div>
    </StyledModal>
  );
}
