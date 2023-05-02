import React from "react";
import api from "../utils/api";
import "../index.css";
import Card from "./Card";

const Main = ({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) => {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getProfile(), api.getInitialCards()])
      .then(([profile, cards]) => {
        setUserName(profile.name);
        setUserDescription(profile.about);
        setUserAvatar(profile.avatar);

        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <main className="main">
        <section className="profile">
          <div className="profile__about">
            <div className="profile__avatar-block">
              <img
                src=" "
                alt="Аватар"
                className="profile__avatar"
                style={{ backgroundImage: `url(${userAvatar})` }}
              />
              <button
                className="profile__avatar-edit-button"
                type="button"
                onClick={onEditAvatar}
              ></button>
            </div>
            <div className="profile__info">
              <div className="profile__description">
                <h1 className="profile__name">{userName}</h1>
                <p className="profile__occupation">{userDescription}</p>
              </div>
              <button
                className="profile__edit-button link"
                type="button"
                onClick={onEditProfile}
              ></button>
            </div>
          </div>
          <button
            className="profile__add-button link"
            type="button"
            onClick={onAddPlace}
          ></button>
        </section>

        <section className="elements">
          <ul className="elements__gallery">
            {cards.map((card) => {
              return (
                <Card key={card._id} card={card} onCardClick={onCardClick} />
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Main;
