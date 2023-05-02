import React, { useEffect } from "react";
import api from "../utils/api";
import "../index.css";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="elements__item">
      <div
        src=""
        alt=""
        className="elements__image link"
        style={{ backgroundImage: `url(${card.link})` }}
        onClick={handleClick}
      ></div>
      <button className="elements__trash link" type="button"></button>
      <div className="elements__card">
        <h2 className="elements__card-name">{card.name}</h2>
        <div className="elements__like-block">
          <button className="elements__like link" type="button"></button>
          <p className="elements__like-quantity">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
