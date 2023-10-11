import globe from "../assets/globe.png";

function Header() {
  return (
    <header className="header">
      <img className="header__image" src={globe} alt="Globe Icon" />
      <h3 className="header__title">my travel journal.</h3>
    </header>
  );
}

export default Header;
