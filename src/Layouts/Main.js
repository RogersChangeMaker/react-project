import style from "./Main.module.css";

function Main() {
  const books = [
    {
      id: 1,
      btitle: "Rich Dad Poor Dad",
      bauthor: "Robert Kiyosaki",
      bdescription: "What the Rich teach their children",
      imageurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgUutsti4IUZIzrbZWtMWTdPKHekpN6DUZvA&s",
    },

    {
      id: 2,
      btitle: "Tell the Machine Good Night",
      bauthor: "Katie Williams",
      bdescription: "Book about Technology and Humanity",
      imageurl:
        "https://149349728.v2.pressablecdn.com/wp-content/uploads/2018/06/1*UjBSeCp839ohojb7C0LHiw.jpeg",
    },

    {
      id: 3,
      btitle: "History of the Philippines",
      bauthor: "William H. Scot",
      bdescription: "A Captivating guide to the History",
      imageurl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcUgmT4Pr2N7_Av-asnZsvrlpJ_AFC0Ow7F4vHD1gevSgIbIi3SWMUWCsTSi3Z3QCK5K0&usqp=CAU",
    },

    {
      id: 1,
      btitle: "The Teaching Church",
      bauthor: "Eugene C. R.",
      bdescription: "Moving Christian Education to center Stage",
      imageurl:
        "https://m.media-amazon.com/images/I/61BBvvu0gIL._AC_UF1000,1000_QL80_.jpg",
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
