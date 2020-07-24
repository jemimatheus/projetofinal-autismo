import React, { Fragment } from "react";
import "./depoimentos.css";
import { Card, CardTitle, CardText } from "reactstrap";

const Depoimentos = (props) => {
  return (
    <Fragment>
      <article id="four" className="post invert style2 alt">
        <div className="card" id="depoimentos">
          <h2 style={{ }}>
            Depoimentos
          </h2>
          <Card body inverse style={{ color: "white", fontWeight: "bold" }}>
            <CardTitle
              style={{ fontWeight: "bold", fontSize: "30px", color: "#444" }}
            >
              Depoimento 1
            </CardTitle>
            <CardText>
              “As pessoas dizem não ter preconceito mas ninguém chama ele pra
              nada . . . os amigos dele são os nossos mais velhos . . . ele não
              recebe nem um telefonema é como se fosse invisível . . .”
            </CardText>
          </Card>
          <Card body inverse style={{ color: "white", fontWeight: "bold" }}>
            <CardTitle
              style={{ fontWeight: "bold", fontSize: "30px", color: "#444" }}
            >
              Depoimento 2
            </CardTitle>
            <CardText>
              “Eles precisam ser tratados com muito amor, carinho e
              principalmente respeito; sem preconceitos. A sociedade tem que
              sensibilizar para acolher devidamente os autistas, realizando
              inclusões sem visões distorcidas estereotipas a respeito. A lei
              garante que o autista sejam considerados pessoas com deficiência e
              passem a ter acesso a toda política de inclusão do governo,e um
              desafio . . . mas quando conquistado é uma superação. ”
            </CardText>
          </Card>
        </div>
        <div className="content">
          <div className="inner inner-dep">
            <Card body inverse style={{ color: "white", fontWeight: "bold" }}>
              <CardTitle
                style={{ fontWeight: "bold", fontSize: "30px", color: "#444" }}
              >
                Depoimento 3
              </CardTitle>
              <CardText>
                “Me sinto completamente só com meu filho . . . só mesmo a família.”
              </CardText>
            </Card>
            <Card body inverse style={{ color: "white", fontWeight: "bold" }}>
              <CardTitle
                style={{ fontWeight: "bold", fontSize: "30px", color: "#444" }}
              >
                Depoimento 4
              </CardTitle>
              <CardText>“A família fica isolada junto com o filho todos
                acham ele lindo inteligente nos elogiam pela nossa batalha mas
                convites que o incluam não há . . . e onde meu filho não pode estar
                preferimos não ir . . . não podemos deixa-lo mas solitário do que já é. ”</CardText>
            </Card>
          </div>
          <div className="postnav">
            <a href="/" className="scrolly prev">
              <span className="icon fa-chevron-up"></span>
            </a>
            <a href="#five" className="prev disabled">
              <span className="icon fa-chevron-down"></span>
            </a>
          </div>
        </div>
      </article>
    </Fragment>
  );
};

export default Depoimentos;
