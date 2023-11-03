import { useContext } from "react";
import PictureContext from "../contexts/PIcturesContext";
import ResultsCard from "./ResultsCard";
import ButtonsPagination from "./ButtonsPagination";

const SearchResult = () => {
  const { dataRetrieved } = useContext(PictureContext);
  console.log(dataRetrieved)

  return (
    <>
      {dataRetrieved.results
        ?
        <>
          <h1>SearchResults</h1>
          <ButtonsPagination />
             {dataRetrieved.results?.map((el, i) => <ResultsCard el={el} key={i} />)}
          <ButtonsPagination />
        </>
        : null}
    </>
  );
};

export default SearchResult;
