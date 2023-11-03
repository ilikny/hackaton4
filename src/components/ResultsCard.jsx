import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.scss";

const ResultsCard = ({ el }) => {
  console.log(el);
  return (
    <div>
      <Link to={`/photo/${el.id}`} ><img className="image" src={el.urls.regular} alt={el.alt_description} />
      </Link>
      <Link to={`/user/${el.user.username}`}>
        <h4>{el.user.name}</h4>
      </Link>
    </div>
  );
};

export default ResultsCard;
