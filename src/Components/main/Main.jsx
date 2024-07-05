import Header from "../header/Header";
import Footer from "../footer/footer";
import style from "./main.module.css";

export default function Main() {
  return (
    <>
      <Header />

      <main>
        <section className={style.container}>
          <div className="card__container ">
            <div className="card__content">
              <div>
                <article className="card__article">
                  <div className="car__image">
                    <img src="" alt="image" className="card__img" />
                    <div className="card__shadow"></div>
                  </div>

                  <div className="card__data">
                    <h3 className="card__name">Julius</h3>
                    <p className="card__description">
                      passionate about develoment and desing,
                      I carry out projects at the request of users.
                    </p>

                    <a href="#" className="card__button">Veja Mais</a>

                  </div>
                </article>
                <article className="card__article">
                  <div className="car__image">
                    <img src="" alt="image" className="card__img" />
                    <div className="card__shadow"></div>
                  </div>

                  <div className="card__data">
                    <h3 className="card__name">hector</h3>
                    <p className="card__description">
                      passionate about develoment and desing,
                      I carry out projects at the request of users.
                    </p>

                    <a href="#" className="card__button">Veja Mais</a>

                  </div>
                </article>
                <article className="card__article">
                  <div className="car__image">
                    <img src="" alt="image" className="card__img" />
                    <div className="card__shadow"></div>
                  </div>

                  <div className="card__data">
                    <h3 className="card__name">Frango</h3>
                    <p className="card__description">
                      passionate about develoment and desing,
                      I carry out projects at the request of users.
                    </p>

                    <a href="#" className="card__button">Veja Mais</a>

                  </div>
                </article>
                <article className="card__article">
                  <div className="car__image">
                    <img src="" alt="image" className="card__img" />
                    <div className="card__shadow"></div>
                  </div>

                  <div className="card__data">
                    <h3 className="card__name">Frito</h3>
                    <p className="card__description">
                      passionate about develoment and desing,
                      I carry out projects at the request of users.
                    </p>

                    <a href="#" className="card__button">Veja Mais</a>

                  </div>
                </article>
                <article className="card__article">
                  <div className="car__image">
                    <img src="" alt="image" className="card__img" />
                    <div className="card__shadow"></div>
                  </div>

                  <div className="card__data">
                    <h3 className="card__name">Assado</h3>
                    <p className="card__description">
                      passionate about develoment and desing,
                      I carry out projects at the request of users.
                    </p>

                    <a href="#" className="card__button">Veja Mais</a>

                  </div>
                </article>
                <article className="card__article">
                  <div className="car__image">
                    <img src="" alt="image" className="card__img" />
                    <div className="card__shadow"></div>
                  </div>

                  <div className="card__data">
                    <h3 className="card__name">Pao</h3>
                    <p className="card__description">
                      passionate about develoment and desing,
                      I carry out projects at the request of users.
                    </p>

                    <a href="#" className="card__button">Veja Mais</a>

                  </div>
                </article>
              </div>
            </div>
          </div>

        </section>
      </main>

      <Footer />

    </>
  )
}
