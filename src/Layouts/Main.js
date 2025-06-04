import style from "./Main.module.css";

function Main() {
  const books = [
    {
      id: 1,
      btitle: "The Design of Everyday Thing",
      bauthor: "Don Norman",
      bdescription: "UX Design Psychology",
      // <ion-icon name="pencil"></ion-icon>
      imageurl:
        "https://booxoul.com/wp-content/uploads/2023/02/A-Deep-Dive-Into-Love-Loss-and-Healing-Through-Milk-and-Honey-by-Rupi-Kaur.webp",
    },

    {
      id: 2,
      btitle: "Atomic Habits",
      bauthor: "James Clear",
      bdescription: "Productivity Psychology",
      imageurl:
        "https://images.squarespace-cdn.com/content/v1/6129e1d90fd5785f5023e7dd/cf25cf7d-0544-4db2-81b0-2e31bd1ebe3b/MATT+RIDLEY.jpg",
    },

    {
      id: 3,
      btitle: "The Innovators",
      bauthor: "Walter Isaacson",
      bdescription: "History Innovation",
      imageurl:
        "https://media.istockphoto.com/id/1211723402/photo/pile-of-old-books-on-brown-background-closeup-selective-focus.jpg?s=612x612&w=is&k=20&c=JuVoEIxCWu6JOMD8Ev75cAsf7ZSaG51GjB4VVEGf2cA=",
    },

    {
      id: 4,
      btitle: "Dune",
      bauthor: "Frank Herbert",
      bdescription: "Sci-Fi Classic",
      imageurl:
        "https://brettmilam.com/wp-content/uploads/2022/08/img-9575.jpg",
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
              <p className="main-description"> {el.bdescription}</p>
              <div className="list-icons">
                <p>Available</p>
                <div>
                  <ion-icon name="pencil"></ion-icon>
                  <ion-icon name="trash"></ion-icon>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Main;
