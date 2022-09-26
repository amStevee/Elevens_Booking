import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import StyledHeader from "../styles/Header.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./reuseables/Button";
import HeaderSearch from "../styles/HeaderSearch.styled";
import { theme } from "../styles/Theme";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContex } from "../contex/searchContex";
import { AuthContex } from "../contex/AuthContext";
// import { useContexts } from "../contex/ContextProvider";

//BUGS-////////////////////////////////////////////////////////////////////////////////
// NONE

export default function Header({ type }) {
  //   //IMPORT STATE FROM CONTEXT
  //   const [toggleDate, setToggleDate] = useContext(useContexts);
  //CALENDER STATES
  const [toggleDate, setToggleDate] = useState(false);
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  //CALENDER STATES ENDS

  //ROOM STATES
  const [toggleOptions, setToggleOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();
  const { user } = useContext(AuthContex);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContex);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, date, options } });
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <StyledHeader>
      <div
        className={
          type === "list" ? "headerContainer listmode" : "headerContainer"
        }
      >
        <ul className="headerList">
          <li className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </li>

          <li className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </li>
          <li className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </li>
          <li className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </li>
          <li className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </li>
        </ul>

        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>

            <p className="headerDescription">
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free Logbooking account
            </p>
            {!user && (
              <Button
                text={"Sign in/Register"}
                padding={"10px"}
                background={theme.color.button}
                color={"#fff"}
                border={"none"}
              />
            )}
            {/* //SEARCH AREA/////////////////////////////////////////////// */}
            <HeaderSearch>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setToggleDate(!toggleDate)}
                  className="headerSearchText"
                >
                  {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                    date[0].endDate,
                    "dd/MM/yyyy"
                  )} `}
                </span>
                {toggleDate === true && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="dateRange"
                    minDate={new Date()}
                  />
                )}
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setToggleOptions(!toggleOptions)}
                  className="headerSearchText"
                >{`${options.adult} adults  ${options.children} children  ${options.room} room`}</span>
                {toggleOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCount">
                        <Button
                          disabled={options.adult <= 1}
                          text={"-"}
                          width={"30px"}
                          height={"30px"}
                          color={"#343E61"}
                          border={"1px solid #343E61"}
                          background={"#fff"}
                          handleOption={() => handleOption("adult", "d")}
                        />
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <Button
                          text={"+"}
                          width={"30px"}
                          height={"30px"}
                          border={"1px solid #343E61"}
                          background={"#fff"}
                          handleOption={() => handleOption("adult", "i")}
                        />
                      </div>
                    </div>

                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCount">
                        <Button
                          disabled={options.children <= 0}
                          text={"-"}
                          width={"30px"}
                          height={"30px"}
                          color={"#343E61"}
                          border={"1px solid #343E61"}
                          background={"#fff"}
                          handleOption={() => handleOption("children", "d")}
                        />
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <Button
                          text={"+"}
                          width={"30px"}
                          height={"30px"}
                          border={"1px solid #343E61"}
                          background={"#fff"}
                          handleOption={() => handleOption("children", "i")}
                        />
                      </div>
                    </div>

                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCount">
                        <Button
                          disabled={options.room <= 1}
                          text={"-"}
                          width={"30px"}
                          height={"30px"}
                          color={"#343E61"}
                          border={"1px solid #343E61"}
                          background={"#fff"}
                          handleOption={() => handleOption("room", "d")}
                        />
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <Button
                          text={"+"}
                          width={"30px"}
                          height={"30px"}
                          border={"1px solid #343E61"}
                          color={"#343E61"}
                          background={"#fff"}
                          handleOption={() => handleOption("room", "i")}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <Button
                  text={"Search"}
                  background={theme.color.background}
                  color={theme.color.text}
                  padding={"8px"}
                  border={"none"}
                  handleOption={handleSearch}
                />
              </div>
            </HeaderSearch>
          </>
        )}
        {/* //SEARCH AREA ENDS/////////////////////////////////////////////// */}
      </div>
    </StyledHeader>
  );
}
