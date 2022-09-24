import Spinner from "react-bootstrap/Spinner";
import { useData } from "../hooks/useData";
import {
  FeaturedImg,
  FeaturedItem,
  FeaturedTitles,
  StyledFeatured,
} from "../styles/Featured.styled";

export default function Featured() {
  const onSuccess = (data) => {
    console.log("success");
  };
  const onError = (error) => {
    console.log("something went wrong", error);
  };
  const { isLoading, data, isError, error, isFetching } = useData(
    onSuccess,
    onError
  );

  if (isLoading) {
    return <Spinner animation="grow" />;
  }

  if (isError) {
    throw error;
  }

  return (
    <div>
      {isFetching ? (
        <Spinner animation="grow" />
      ) : (
        <>
          <StyledFeatured>
            <FeaturedItem>
              <FeaturedImg src="./places/footbal.jpg" />
              <FeaturedTitles>
                <h1>Tokyo</h1>
                <h2>{data.data[0]} properties</h2>
              </FeaturedTitles>
            </FeaturedItem>

            <FeaturedItem>
              <FeaturedImg src="./places/five.jpg" />
              <FeaturedTitles>
                <h1>London</h1>
                <h2>{data.data[1]} properties</h2>
              </FeaturedTitles>
            </FeaturedItem>

            <FeaturedItem>
              <FeaturedImg src="./places/one.jpg" />
              <FeaturedTitles>
                <h1>Madrid</h1>
                <h2>{data.data[2]} properties</h2>
              </FeaturedTitles>
            </FeaturedItem>
          </StyledFeatured>
        </>
      )}
    </div>
  );
}
