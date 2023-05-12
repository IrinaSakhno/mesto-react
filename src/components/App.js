import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isDeleteConfirmationPopupOpen, setIsDeleteConfirmationPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    isOpen: false,
    element: {},
  });

  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getProfile().then(setCurrentUser).catch(console.error);

    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch(console.error);
  }, []);

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    })
      .catch(console.error);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard({ isOpen: true, element: card });
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeleteConfirmationPopupOpen(false);
    setSelectedCard({ isOpen: false, element: {} });
  };

  const isOpen =
    isEditAvatarPopupOpen ||
    isEditProfilePopupOpen ||
    isAddPlacePopupOpen ||
    selectedCard.isOpen;

  React.useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", closeByEscape);
      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [isOpen]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
        />
        <Footer />
        <PopupWithForm
          title={"Вы уверены?"}
          name={"delete-card"}
          buttonText={"Да"}
          isOpen={isDeleteConfirmationPopupOpen}
          onClose={closeAllPopups}
        />

        <PopupWithForm
          title={"Обновить аватар"}
          name={"new-avatar"}
          buttonText={"Обновить аватар"}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            className="popup__form-field popup__form-field-source"
            name="source"
            id="avatar-link-input"
            type="url"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error placelink-input-error avatar-link-input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          title={"Редактировать профиль"}
          name={"change-name"}
          buttonText={"Сохранить"}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            className="popup__form-field popup__form-field-name"
            name="name"
            id="name-input"
            type="text"
            placeholder="Введите имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__input-error name-input-error"></span>
          <input
            className="popup__form-field popup__form-field-occupation"
            name="occupation"
            id="occupation-input"
            type="text"
            placeholder="Введите свой тип занятости"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__input-error occupation-input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          title={"Новое место"}
          name={"new-card"}
          buttonText={"Создать"}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            className="popup__form-field popup__form-field-card"
            name="card"
            id="placename-input"
            type="text"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__input-error placename-input-error"></span>
          <input
            className="popup__form-field popup__form-field-source"
            name="source"
            id="placelink-input"
            type="url"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error placelink-input-error"></span>
        </PopupWithForm>

        <ImagePopup
          onClose={closeAllPopups}
          name="opened-picture"
          card={selectedCard}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
