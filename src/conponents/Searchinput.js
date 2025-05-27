import styles from './Searchinput.module.css';

function Searchinput(){
    return (
      <div className={styles.inputBox}>
        <input type="search" placeholder="search by title, author, or ISBN" />
        <ion-icon name="search-outline"></ion-icon>
      </div>
    );
}

export default Searchinput;