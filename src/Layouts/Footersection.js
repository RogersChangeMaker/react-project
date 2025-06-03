import "./Footersection.module.css";

function Footersection() {
  return (
    <footer className="footer-section">
      <p>Showing 1-4 of 4 books</p>
      <div className="footer-section-icons">
        <ion-icon name="chevron-back-circle-outline"></ion-icon>
        <button type="button">1</button>

        <ion-icon name="chevron-forward-circle-outline"></ion-icon>
      </div>
    </footer>
  );
}

export default Footersection;
