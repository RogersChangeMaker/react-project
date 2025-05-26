import styles from './SearchImput.module.css';

function Searchinput(){
    return (
      <div className={namespace.inputBox}>
        <input type="search" placeholder="search by title, author, or ISBN" />
        <ion-icon name="search-outline"></ion-icon>
      </div>
    );
}

export default Searchinput;