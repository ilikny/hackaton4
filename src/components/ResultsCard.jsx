import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.scss";

const ResultsCard = ({ el }) => {
  console.log(el);
  return (
    <div>
      <img className="image" src={el.urls.regular} alt="" />
      <Link to={`/user/${el.user.username}`}>
        <h4>{el.user.name}</h4>
      </Link>
    </div>
  );
};

export default ResultsCard;
