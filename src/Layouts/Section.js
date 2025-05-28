import './Section.module.css';

function Section(props){
    return (
      <section className="big-container">

        <article className="article">
          <h4>All Books (4)</h4>
          <button className='button' type="button">+ Add New Books</button>
        </article>

        <main className="main">

          <div className='main-1st'>
            <img src={props.image} alt="Business Book"/>
            <h4>{props.bookDescription}</h4>
            <p>{props.author}</p>
            <p>{props.writeUp}</p>
            <div className='icons-conatainer'>
              <h5>{props.filters}</h5>
              <div className='icons'>
                <ion-icon name="pencil-outline"></ion-icon>
                <ion-icon name="trash-outline"></ion-icon>
              </div>
            </div>
          </div>
        </main>
      </section>
    );
}

export default Section;