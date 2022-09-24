import StyledList from "../styles/List.styled";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import Button from "../components/reuseables/Button";
import SearchItem from "../components/SearchItem";
import { useLists } from "../hooks/useData";

export default function List() {
  const [toggleDate, setToggleDate] = useState(false);
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { isLoading, data, isError, error, isFetching, refetch } = useLists(
    destination,
    min,
    max
  );

  if (isFetching) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    throw error;
  }

  //A BETTER NAME FOR THIS FUNCTION WOULD BE REFRESH(REFETCH) BUT AM USING THE HANDLE CLICK ON MY REUSABLE FUNCTION
  const handleClick = () => {
    refetch();
  };

  return (
    <>
      <Navbar />
      <Header type="list" />
      <StyledList>
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="destination" id="destination">
                Destination:
              </label>
              <input
                type="text"
                name="destination"
                id="destination"
                placeholder={destination}
              />
            </div>
            <div className="lsItem">
              <label htmlFor="checkin" id="checkin">
                Check-in Date:
              </label>
              <span onClick={() => setToggleDate(!toggleDate)}>
                {`${format(
                  location.state.date[0].startDate,
                  "dd/MM/yyyy"
                )} to ${format(location.state.date[0].endDate, "dd/MM/yyyy")}`}
              </span>
              {toggleDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                  className="disableDate"
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options:</label>
              <div className="lsOption">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.adult}
                    min={1}
                  />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.children}
                    min={0}
                  />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <Button
              text={"Search"}
              padding={"10px"}
              background={"#3acae5"}
              border={"none"}
              width={"100%"}
              borderR={"5px"}
              color={"#fff"}
              handleOption={handleClick}
            />
          </div>
          <div className="listResult">
            {isLoading ? (
              <h1>Loading...</h1>
            ) : (
              <>
                {data.data.map((item) => (
                  <SearchItem item={item} key={item.id} />
                ))}
              </>
            )}
          </div>
        </div>
      </StyledList>
    </>
  );
}
