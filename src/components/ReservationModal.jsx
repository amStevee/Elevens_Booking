import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import StyledModal from "../styles/Modal.styled.js";
import { useRoom } from "../hooks/useData.js";
import { useState } from "react";
import { useContext } from "react";
import { SearchContex } from "../contex/searchContex.js";

export default function Modal({ setOpenModal, hotelId }) {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { isLoading, data, isError, error, isFetching } = useRoom(hotelId);
  const { date } = useContext(SearchContex);
  if (isFetching || isLoading) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    throw error;
  }
  const getDateInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    let list = [];
    while (date <= end) {
      list.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return list;
  };

  const allDates = getDateInRange(date[0].startDate, date[0].endDate);
  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
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
    const handleClick = () => {
      console.log("clicked");
    };
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
            {[item.room_numbers].map((roomNumber) => (
              <div className="room">
                <label>{roomNumber.number}</label>
                <input
                  type="checkbox"
                  value={roomNumber.id}
                  onChange={handleSelect}
                  disabled={() => !isAvailable(roomNumber)}
                  id=""
                />
                <button onClick={handleClick} className="rButton">
                  Reserve Now!
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </StyledModal>
  );
}
