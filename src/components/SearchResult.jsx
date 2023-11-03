import { useContext } from "react";
import PictureContext from "../contexts/PIcturesContext";
import ResultsCard from "./ResultsCard";

const SearchResult = () => {
  const { dataRetrieved } = useContext(PictureContext);
  // console.log(dataRetrieved)

  return (
    <>
      <h1>SearchResults</h1>
      {dataRetrieved
        ? dataRetrieved.results?.map((el, i) => <ResultsCard el={el} key={i} />)
        : null}
    </>
  );
};

export default SearchResult;
