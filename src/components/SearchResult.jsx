import { useContext, useState } from "react";
import PictureContext from "../contexts/PIcturesContext";
import ResultsCard from "./ResultsCard";
import ButtonsPagination from "./ButtonsPagination";
import "./SearchResults.scss";

const SearchResult = () => {
  const { dataRetrieved } = useContext(PictureContext);
  const [valueImgW, setValueImgW] = useState(400);
  const [valueImgH, setValueImgH] = useState(400);

  const handleVal = (e) => {
    setValueImgW(e.target.value);
  };

  const handleValH = (e) => {
    setValueImgH(e.target.value);
  };

  return (
    <>
      {dataRetrieved.results ? (
        <>
          <h1>SearchResults</h1>
          <p>Width</p>
          <input
            type="range"
            min="200"
            max="1200"
            onChange={handleVal}
            className="slider"
          />
          <br />
          {/*  <p>Height</p>
             <input
            type="range"
            min="200"
            max="1200"
            onChange={handleValH}
            className="slider"
          /> */}
          <br />
          <br />
          <br />
          <ButtonsPagination />
          {dataRetrieved.results?.map((el, i) => (
            <ResultsCard
              el={el}
              key={i}
              valueImgW={valueImgW}
              valueImgH={valueImgH}
            />
          ))}
          <ButtonsPagination />
        </>
      ) : null}
    </>
  );
};

export default SearchResult;
