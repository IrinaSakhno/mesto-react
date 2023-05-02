import React from "react";
import "../index.css";

function PopupWithForm({ title, name, children, buttonText, isOpen, onClose }) {
  return (
    <div
      className={isOpen ? `popup popup_opened` : `popup`}
      id={`popup__${name}`}
    >
      <div className="popup__overlay" onMouseDown={onClose}></div>
      <div className="popup__container">
        <button
          className="popup__close-button link"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={name} noValidate>
          {children}
          <button className="popup__submit-button link" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
