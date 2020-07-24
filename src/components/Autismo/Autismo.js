import React, {Fragment} from "react";
import img from "../../assets/brinquedo.jpg";
import "./autismo.css";

const Autismo = () => {
  return (
    <Fragment>
      <article id="one" className="post style1">
        <div className="image">
          <img
            src={img}
            alt="criança com brincando"
            data-position="75% center"
          />
        </div>
        <div className="content">
          <div className="inner" id="autismo">
            <header>
              <h2><a href="/"> Autismo</a></h2>
            </header>
            <p>
              O Autismo O Autismo é um distúrbio e uma formação no cérebro da
              criança que se manifesta durante os primeiros três anos de vida e
              que perdurará ao longo da vida. Fundamentalmente, afeta a
              capacidade de uma pessoa se comunicar e se relacionar com os
              outros, além da imaginação e rotinas comportamentais repetitivas.
              O autista é, antes de mais nada, um ser humano. Todo ser humano
              deseja o mesmo: ser feliz e ser aceito. Para isso é preciso o{" "}
              <span>mínimo de PRECONCEITO e o máximo de AMOR</span>, da família
              e dos que o cercam.
            </p>
          </div>
          <div className="postnav">
            <a href="/" className="prev disabled">
              <span className="icon fa-chevron-up"></span>
            </a>
            <a href="#two" className="scrolly next">
              <span className="icon fa-chevron-down"></span>
            </a>
          </div>
        </div>
      </article>
    </Fragment>
  );
};
export default Autismo;
