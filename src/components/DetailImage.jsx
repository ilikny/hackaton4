import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import accessKey from "../../keys";
import './DetailImage.scss';
import { Link } from "react-router-dom";



const DetailImage = () => {

  const { id } = useParams();
  const [ photoData, setPhotoData ] = useState(null)

  const loadData = async () => {
    const response = await fetch(`https://api.unsplash.com/photos/${id}?client_id=${accessKey}`)
    const data = await response.json();

    // console.log(data)
    setPhotoData(data)
  }

  useEffect(()=>{
    loadData();
  },[])

  return (<>
    <div><h4>Detail Image</h4></div>
    {
      photoData ?
      <>
      <h6>Created at: {photoData.created_at}</h6>
      <p>Aperture: {photoData.exif.aperture}</p>
      <p>Exposure time: {photoData.exif.exposure_time}</p>
      <p>Focal length: {photoData.exif.focal_length}</p>
      <p>ISO: {photoData.exif.iso}</p>
      <p>Camera model: {photoData.exif.model}</p>
      <Link to={`/user/${photoData.user.username}`}>
        <h4>Author: {photoData.user.name}</h4>
      </Link>
      <img className="image_detail" src={photoData.urls.regular} alt={photoData.alt_description} />
      <Link to="/" >Back to home</Link>
      </>
      :
      null
    }

    </>
  )
}

export default DetailImage