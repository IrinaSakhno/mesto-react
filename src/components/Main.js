import "../index.css";

const Main = () => {
  const handleEditAvatarClick = () => {
    document
      .querySelector("#popup__new-avatar")
      .classList.add("popup_opened");
  };

  const handleEditProfileClick = () => {
    document
      .querySelector("#popup__change-name")
      .classList.add("popup_opened");
  };

  const handleAddPlaceClick = () => {
    document
      .querySelector("#popup__new-card")
      .classList.add("popup_opened");
  };

  return (
    <>
      <main className="main">
        <section className="profile">
          <div className="profile__about">
            <div className="profile__avatar-block">
              <img src=" " alt="Аватар" className="profile__avatar" />
              <button
                className="profile__avatar-edit-button"
                type="button"
                onClick={handleEditAvatarClick}
              ></button>
            </div>
            <div className="profile__info">
              <div className="profile__description">
                <h1 className="profile__name"></h1>
                <p className="profile__occupation"></p>
              </div>
              <button
                className="profile__edit-button link"
                type="button"
                onClick={handleEditProfileClick}
              ></button>
            </div>
          </div>
          <button className="profile__add-button link" type="button" onClick={handleAddPlaceClick}></button>
        </section>

        <section className="elements">
          <ul className="elements__gallery"></ul>
        </section>
      </main>
    </>
  );
};

export default Main;
