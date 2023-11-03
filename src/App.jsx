import "./App.css";
import PictureContext from "./contexts/PIcturesContext";
import accessKey from "./keys";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import { useContext, useEffect, useState } from "react";
import DetailPage from "./components/DetailPage";

function App() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchKeywordAuthor, setSearchKeywordAuthors] = useState("");
  const [dataRetrieved, setDataRetrieved] = useState([]);
  const [page, setPage] = useState(1)

  const loadData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data)
    setDataRetrieved(data);
  };

  useEffect(() => {
    // console.log(`https://api.unsplash.com/search/photos?page=${page}&per_page=12&query=${searchKeyword}&client_id=${accessKey}`);
    if (!searchKeyword) return
    loadData(
      `https://api.unsplash.com/search/photos?page=${page}&per_page=12&query=${searchKeyword}&client_id=${accessKey}`
    );
  }, [searchKeyword, page]);

  // useEffect(() => {
  //   loadData(
  //     `https://api.unsplash.com/users/" + {AUTHOR'S_USERNAME} + "?client_id={YOUR_ACCESS_KEY}`
  //   );
  // }, [searchKeyword]);

  return (
    <PictureContext.Provider
      value={{
        searchKeyword,
        setSearchKeyword,
        dataRetrieved,
        setSearchKeywordAuthors,
        page,
        setPage
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/user/:username" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </PictureContext.Provider>
  );
}

export default App;
