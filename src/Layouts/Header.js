import "./Header.module.css";

function Header() {
  return (
    <div className="header-container">
      <ul className="header-list">
        <li>All</li>
        <li>Fiction</li>
        <li>Non-Fiction</li>
        <li>Science</li>
        <li>History</li>
        <li>Technology</li>
        <li>Arts</li>
      </ul>

      <div className="header-icons">
        {/* <ion-icon name="grid"></ion-icon>
        <ion-icon name="list"></ion-icon> */}
      </div>
    </div>
  );
}
export default Header;
