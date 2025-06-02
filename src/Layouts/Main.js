import style from "./Main.module.css";

function Main() {
  const books = [
    {
      id: 1,
      btitle: "Rich Dad Poor Dad",
      bauthor: "Robert Kiyosaki",
      bdescription: "What the Rich teach their children",
      imageurl:
        "https://down-ph.img.susercontent.com/file/ph-11134207-7qul0-lg1wieqqzzi05e",
    },
  ];

  return (
    <main>
      <ul className={style.main}>
        {books.map((el) => (
          <li key={el.id}>
            <img className={style.mainimg} src={el.imageurl} alt={el.btitle} />
            <div className={style.maindiv}>
              <p> {el.btitle}</p>
              <p> {el.bauthor}</p>
              <p> {el.bdescription}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Main;
