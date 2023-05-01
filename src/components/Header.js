import HeaderLogo from "../images/header-logo.svg";
import "../index.css";

function Header() {
  return (
    <>
      <header className="header">
          <img
            src={HeaderLogo}
            alt="Логотип"
            className="header__logo"
          />
        </header>
    </>
  );
}

export default Header;
