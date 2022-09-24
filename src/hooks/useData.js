import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getHotels = () => {
  return axios.get(
    "http://localhost:5000/api/hotels/countBYCity?cities=tokyo,london,madrid"
  );
};
//GETS THE TYPE OF HOTEL FROM HOTEL DB AND NUMBER OF OCCURANCE
const getTypes = () => {
  return axios.get(
    "http://localhost:5000/api/hotels/countByType?types=hotel,apartments,resort,villa,cabin"
  );
};

const getProperties = () => {
  return axios.get(
    "http://localhost:5000/api/hotels?featured=true&min=120&max=160"
  );
};

const getLists = (destination, min, max) => {
  return axios.get(
    `http://localhost:5000/api/hotels/cities?city=${destination}&min=${
      min || 0
    }&max=${max || 999}`
  );
};

export const useLists = (destination, min, max) => {
  return useQuery(["hotel_lists"], () => getLists(destination, min, max));
};

export const useData = (onSuccess, onError) => {
  return useQuery(["hotel_count"], getHotels, {
    onSuccess,
    onError,
  });
};

export const useType = (onSuccess, onError) => {
  return useQuery(["hotel_type_count"], getTypes, {
    onSuccess,
    onError,
  });
};

export const useProperties = (onSuccess, onError) => {
  return useQuery(["hotel_property"], getProperties, {
    onSuccess,
    onError,
  });
};

// export const addData = () => {
//   return useMutation(addHotels)
// }
