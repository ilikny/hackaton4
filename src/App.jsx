import './App.css'
import PictureContext from './contexts/PIcturesContext'
import accestKey from '../keys'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import { useContext, useEffect, useState } from 'react'


function App() {
  const [ searchKeyword, setSearchKeyword ]  = useState("")
  const [ dataRetrieved, setDataRetrieved ] = useState([])


  const loadData = async () => {
    const response = await fetch(`https://api.unsplash.com/search/photos?per_page=12&query=${searchKeyword}&client_id=${accestKey}`)
    const data = await response.json()

    // console.log(data)
    setDataRetrieved(data)
  }

  useEffect(()=>{
    loadData()
  },[searchKeyword])


 


  return (
    <PictureContext.Provider value={
      { searchKeyword, 
        setSearchKeyword,
        dataRetrieved
    }}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Homepage/>}/>
    </Routes>
    </BrowserRouter>
    </PictureContext.Provider>
  )
}

export default App
