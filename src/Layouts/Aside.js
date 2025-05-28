import "./Aside.module.css";

function Section() {
  return (
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
  );
}
export default Section;
