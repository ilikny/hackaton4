import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
// import PictureContext from "../contexts/PIcturesContext";
import accessKey from "../keys";
import { useEffect } from "react";
import { useState } from "react";
import instagramIcon from "../assets/insta.svg";
import "./DetailPage.scss";
import PictureContext from "../contexts/PIcturesContext";
import ButtonsPagination from "./ButtonsPagination";

const DetailPage = () => {
  const [user, setUser] = useState(null);
  const [photos, setPhotos] = useState(null);
  const {page} = useContext(PictureContext)

  console.log(page)
  const { username } = useParams();

  const getUser = async () => {
    const response = await fetch(
      `https://api.unsplash.com/users/${username}?client_id=${accessKey}`
    );
    const data = await response.json();
    setUser(data);
    // console.log("THE USER", data);
    // Get photos

    const photos = await fetch(
      `https://api.unsplash.com/users/${username}/photos?page=${page}&per_page=12&client_id=${accessKey}`
    );
    const photosToJson = await photos.json();
    setPhotos(photosToJson);
    // console.log("FF", photosToJson);
  };

  useEffect(() => {
    getUser();
  }, [page]);

  return (
    <div className="detail-page">
      <div className="detail-page_content">
        <div className="profile">
          <div className="profile-image">
            <img src={user?.profile_image.large} alt="Profile" />
            <a
              href={`https://www.instagram.com/${user?.username}`}
              target="_blank"
            >
              <p className="insta-box">
                {" "}
                <span>Link to instagram:</span>
                <img className="insta-icon" src={instagramIcon} alt="Icon" />
              </p>
            </a>
          </div>
          <div className="profile-details">
            <p>{user?.name}</p>
            <p>
              <i>Followers </i>
              <strong>{user?.followers_count}</strong>
            </p>
            <p>
              <i>Following </i>
              <strong>{user?.following_count}</strong>
            </p>
            <p>
              <i>Username </i>
              <strong>{user?.instagram_username}</strong>
            </p>
            <p>Location: {user?.location}</p>
          </div>
        </div>
        <div className="biography">{user?.bio}</div>
        <h2>Photos:</h2>
        <ButtonsPagination />
        <div className="photos">
          {photos?.map((el) => (
            <img key={el.id} src={el.urls.regular} />
          ))}
        </div>
        <ButtonsPagination />
        <p>{user?.portfolio_url}</p>
      </div>
    </div>
  );
};

export default DetailPage;
