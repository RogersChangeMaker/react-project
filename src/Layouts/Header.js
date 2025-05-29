import "./Header.module.css";


function Header() {
  return (
    <div className="biggest-container">
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
          <ion-icon name="grid"></ion-icon>
          <ion-icon name="list"></ion-icon>
        </div>
      </div>

        <aside className="aside-container">
          <div className="aside-filters">
            <h4>Filters</h4>
            <label>
              <input type="checkbox" name="subscribe" />
              Available
            </label>
            <label>
              <input type="checkbox" name="subscribe" />
              Borrowed
            </label>
            <label>
              <input type="checkbox" name="subscribe" />
              All Status
            </label>
          </div>

          <div className="aside-categories">
            <h4>Categories</h4>
            <label>
              <input type="checkbox" name="subscribe" />
              Fiction
            </label>
            <label>
              <input type="checkbox" name="subscribe" />
              Non-Fiction
            </label>
            <label>
              <input type="checkbox" name="subscribe" />
              Science
            </label>
            <label>
              <input type="checkbox" name="subscribe" />
              History
            </label>
            <label>
              <input type="checkbox" name="subscribe" />
              Technology
            </label>
            <label>
              <input type="checkbox" name="subscribe" />
              Arts
            </label>
          </div>

          <div className="aside-popular">
            <h4>Popular Tags</h4>
            <ul>
              <li>Fiction Science History</li>
              <li>Biography Technology Art</li>
            </ul>
          </div>
        </aside>

      <section className="big-container">
        <article className="article">
          <h4>All Books (4)</h4>
          <button className="button" type="button">
            + Add New Books
          </button>
        </article>

        <main className="main">
          <div className="main-1st">
            <img src="/business-book.jpg" alt="Business Book" />
            <h4>Rich Dad Poor Dad</h4>
            <p>Robert Kiyosaki</p>
            <p>What the rich teach</p>
            <div className="icons-container">
              <h5>Available</h5>
              <div className="icons">
                <ion-icon name="pencil-outline"></ion-icon>
                <ion-icon name="trash-outline"></ion-icon>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
export default Header;
