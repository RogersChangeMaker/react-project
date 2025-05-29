import Nav from "./Layouts/Nav";
// import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
// import Section from "./Layouts/Section";
import Aside from "./Layouts/Aside";

function App() {
  return (
    <div className="app">
      <Nav />
      <Header />
      <Aside />
      {/* <Section /> */}

      {/* <Footer/> */}

      {/* <div className="main">
        <Header
          image="https://down-ph.img.susercontent.com/file/ph-11134207-7qul0-lg1wieqqzzi05e"
          bookDescription="Rich Dad, Poor Dad"
          author="Robert Kiyosaki"
          writeUp="UX Design Psychology"
          filters="Available"
        />

        <Header
          image="https://abiva.com.ph/wp-content/uploads/2022/05/SNT7-scaled.jpg"
          bookDescription="Atomic Habits"
          author="James Clear"
          writeUp="Productivity Psychology"
          filters="Borrowed"
        />

        <Header
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqU4K_3j5yxV-bRTte6dtKxBFLMLOxlPbKdJgK9O5jWu1Q_sg2wOwpl2ohy4SMGWefoLM&usqp=CAU"
          bookDescription="The Innovators"
          author="Walter Isaacson"
          writeUp="History Innovation"
          filters="Available"
        />

        <Header
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlwETqbaE7UX7terJTLuhDTdxRzVOvgO8XEg&s"
          bookDescription="Dune"
          author="Frank Herbert"
          writeUp="Sci-Fi Classic"
          filters="Available"
        />
      </div> */}
    </div>
  );
}

export default App;
