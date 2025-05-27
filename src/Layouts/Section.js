import "./Section.module.css";

function Section() {
  return (
    <section className="section-container">
      <div className="section-filters">
        <div className="available">
          <h2>Filters</h2>
          <label>
            <input type="checkbox" name="subscribe" />
            Available
          </label>
        </div>
        <div className="borroed">
          <h2>Filters</h2>
          <label>
            <input type="checkbox" name="subscribe" />
            Borrowed
          </label>
        </div>
        <div className="all-status">
          <h2>Filters</h2>
          <label>
            <input type="checkbox" name="subscribe" />
            All Status
          </label>
        </div>
      </div>
    </section>
  );
}
export default Section;
