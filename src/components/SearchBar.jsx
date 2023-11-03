import { useContext, useState } from "react";
import PictureContext from "../contexts/PIcturesContext";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState('')
  const { searchKeyword, setSearchKeyword, setSearchKeywordAuthors } =
    useContext(PictureContext);

  const handleInput = () => {
    setSearchKeyword(inputValue);
    // console.log(event.target.value);
  };

  const valueFunction = (ev) => {
    setInputValue(ev.target.value)
  }


  // const handleInputAuthors = (event) => {
  //   setSearchKeywordAuthors(event.target.value);
  //   console.log(event.target.value);
  // };

  return (
    <>
      <h2>Search for pictures</h2>
      <input
      onInput={valueFunction}
        type="text"
        placeholder="Search for images"
      />
      <button onClick={handleInput}>Search</button>

      {/* <h2>Search for authors</h2>
      <input
        onInput={handleInputAuthors}
        type="text"
        placeholder="Search for authors"
      /> */}
    </>
  );
}
