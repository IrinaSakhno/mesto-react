import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="page">
        <Header  />
        <Main />
        <Footer />

        <div className="popup" id="popup__delete-card">
          <div className="popup__overlay"></div>
          <div className="popup__container popup__delete-confirmation-container">
            <button className="popup__close-button link" type="button"></button>
            <p className="popup__title">Вы уверены?</p>
            <button
              className="popup__submit-button popup__delete-confirmation-button link"
              type="submit"
            >
              Да
            </button>
          </div>
        </div>

        <div className="popup" id="popup__new-avatar">
          <div className="popup__overlay"></div>
          <div className="popup__container popup__container-new-avatar">
            <button
              className="popup__close-button close link"
              type="button"
            ></button>
            <h2 className="popup__title">Обновить аватар</h2>
            <form
              className="popup__form popup__form_avatar"
              name="form"
              noValidate
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
              <button
                className="popup__submit-button popup__create-button popup__avatar-submit-button link"
                type="submit"
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>

        <div className="popup" id="popup__change-name">
          <div className="popup__overlay"></div>
          <div className="popup__container">
            <button className="popup__close-button link" type="button"></button>
            <h2 className="popup__title">Редактировать профиль</h2>
            <form
              className="popup__form popup__form_profile"
              name="form"
              noValidate
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
              <button className="popup__submit-button link" type="submit">
                Сохранить
              </button>
            </form>
          </div>
        </div>

        <div className="popup" id="popup__new-card">
          <div className="popup__overlay"></div>
          <div className="popup__container">
            <button
              className="popup__close-button close link"
              type="button"
            ></button>
            <h2 className="popup__title">Новое место</h2>
            <form
              className="popup__form popup__form_card"
              name="form"
              noValidate
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
              <button
                className="popup__submit-button popup__create-button link"
                type="submit"
              >
                Создать
              </button>
            </form>
          </div>
        </div>

        <div
          className="popup popup_darker-background"
          id="popup__opened-picture"
        >
          <div className="popup__overlay"></div>
          <div className="popup__picture-view">
            <button
              className="popup__close-button popup__close-button_image close link"
              type="button"
            ></button>
            <figure className="popup__picture-with-caption">
              <img className="popup__picture" src=" " alt="" />
              <figcaption className="popup__picture-caption"></figcaption>
            </figure>
          </div>
        </div>
      </div>
      <template className="elements__card-template" id="new-card">
        <li className="elements__item">
          <img src=" " alt="" className="elements__image link" />
          <button className="elements__trash link" type="button"></button>
          <div className="elements__card">
            <h2 className="elements__card-name"></h2>
            <div className="elements__like-block">
              <button className="elements__like link" type="button"></button>
              <p className="elements__like-quantity">0</p>
            </div>
          </div>
        </li>
      </template>
    </>
  );
}

export default App;
