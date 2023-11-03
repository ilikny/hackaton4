import { useContext } from "react";
import PictureContext from "../contexts/PIcturesContext";

export default function SearchBar() {
  const { searchKeyword, setSearchKeyword, setSearchKeywordAuthors } =
    useContext(PictureContext);

  const handleInput = (event) => {
    setSearchKeyword(event.target.value);
    // console.log(event.target.value);
  };

  const handleInputAuthors = (event) => {
    setSearchKeywordAuthors(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <h2>Search for pictures</h2>
      <input
        onInput={handleInput}
        type="text"
        placeholder="Search for images"
      />

      <h2>Search for authors</h2>
      <input
        onInput={handleInputAuthors}
        type="text"
        placeholder="Search for authors"
      />
    </>
  );
}
