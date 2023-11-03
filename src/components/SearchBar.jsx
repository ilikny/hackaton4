import { useContext } from "react"
import PictureContext from "../contexts/PIcturesContext"

export default function SearchBar() {

  const { searchKeyword, setSearchKeyword } = useContext(PictureContext)

  const handleInput = event => {
    setSearchKeyword(event.target.value)
    console.log(event.target.value)
  }


  return (<>
    <input onInput={ handleInput } type="text" />
    </>
  )

}