import { useProperties } from "../hooks/useData";
import StyledFeaturedP from "../styles/FeaturedProperties.styled";
import Button from "./reuseables/Button";

export default function FeaturedProperties() {
  const onSuccess = (data) => {
    console.log("success");
  };
  const onError = (error) => {
    console.log("something went in property list", error);
  };
  const { isLoading, data, isError, error, isFetching } = useProperties(
    onSuccess,
    onError
  );

  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    throw error;
  }

  return (
    <StyledFeaturedP>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {data.data.map((item) => (
            <div className="fpItem" key={item.id}>
              <img src={item.userimage} alt="" className="fpImg" />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                starting from ${item.cheapestprice}
              </span>
              {item.rating && (
                <div className="rating">
                  <Button
                    text={item.rating}
                    background={"#343E61"}
                    border={"none"}
                    padding={"4px"}
                    color={"#fff"}
                    marginright={"10px"}
                  />
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </StyledFeaturedP>
  );
}
