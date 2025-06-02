import "./Aside.module.css";

function Aside() {
  return (
    <aside className="aside-container">
      <div className="aside-filters">
        <h4>Filters</h4>
        <div>
          <input type="checkbox" />
          <label>Available</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Borrowed</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>All Status</label>
        </div>
      </div>

      <div className="aside-categories">
        <h4>Categories</h4>
        <div>
          <input type="checkbox" />
          <label>Fiction</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Non-Fiction</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Science</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>History</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Technology</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Arts</label>
        </div>
      </div>

      <div className="aside-popular">
        <h4>Popular Tags</h4>
        <ul>
          <li>Fiction Science History</li>
          <li>Biography Technology Art</li>
        </ul>
      </div>
    </aside>
  );
}
export default Aside;
