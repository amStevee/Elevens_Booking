import { useType } from "../hooks/useData";
import StyledPropertyList from "../styles/PropertyList.styled";
export default function PropertyList() {
  const onSuccess = (data) => {
    console.log("success");
  };
  const onError = (error) => {
    console.log("something went in property list", error);
  };
  const { isLoading, data, isError, error, isFetching } = useType(
    onSuccess,
    onError
  );

  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    throw error;
  }

  const images = [
    "./places/one.jpg",
    "./places/one.jpg",
    "./places/one.jpg",
    "./places/one.jpg",
    "./places/one.jpg",
  ];

  return (
    <StyledPropertyList>
      {isLoading ? (
        <h2>content is loading...</h2>
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="pListItem" key={i}>
                <img src={img} alt="" className="pListImg" />
                <div className="pListTitles">
                  <h1>{data.data[i][0]}</h1>
                  <h2>
                    {data.data[i][1]} {data.data[i][0]}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </StyledPropertyList>
  );
}
