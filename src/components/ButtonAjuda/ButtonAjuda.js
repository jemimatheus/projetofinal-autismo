import React, { Fragment } from "react";

import "./ButtonAjuda.css";

const ButtonAjuda = () => {
  return (
    <Fragment>
      <h3 style={{color:"#f0d21f"}}>Como podemos melhorar a vivência do autista e sua familia?</h3>
      <section className="m-1">
        <div>
          <p>
            <a
              className="btn btn-primary text-white"
              data-toggle="collapse"
              href="#collapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample1"
              style={{width:"150px",height:"50px"}}
            >
              Consciência 
            </a>
          </p>
          <div className="collapse" id="collapseExample1">
            <div className="card card-body">
              É importante que o grupo de colegas saiba quais são as
              características (como as hipersensibilidades) que o autista pode
              apresentar, assim como algumas mudanças de humor. Tudo isso é
              imprescindível para que todos saibam que o autista é uma pessoa
              com comportamentos especiais e merece total respeito.
            </div>
          </div>
          <p>
            <a
              className="btn btn-primary"
              data-toggle="collapse"
              href="#collapseExample2"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample2"
              style={{width:"150px",height:"50px"}}
            >
             Convívio
            </a>
          </p>
          <div className="collapse" id="collapseExample2">
            <div className="card card-body">
              Uma das características que os autistas podem apresentar é o fato
              de não gostarem da sensação de enclausuramento. Isso significa que
              os abraços e outros apertos não são tão legais assim para eles.
              Contudo, outras demonstrações de carinho podem ser feitas, como o
              entendimento de suas condições e o convite a outras atividades.
            </div>
          </div>
          <p>
            <a
              className="btn btn-primary"
              data-toggle="collapse"
              href="#collapseExample3"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample3"
              style={{width:"150px",height:"50px"}}
            >
              Interação
            </a>
          </p>
          <div className="collapse" id="collapseExample3">
            <div className="card card-body">
              Se por um lado, o autista pode ter algumas limitações, por outro
              ele pode ser surpreendentemente brilhante. Procure identificar em
              que ponto ele desenvolve suas habilidades e tente fazer uma
              aproximação do autista com os outros que estão por perto. É
              importante sempre lembrar que o autista não pode viver em uma
              bolha, isso significa que toda forma de interação é bem-vinda,
              respeitando-se sempre suas condições.
            </div>
          </div>
          <p>
            <a
              className="btn btn-primary "
              data-toggle="collapse"
              href="#collapseExample4"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample4"
              style={{width:"150px",height:"50px"}}
            >
             Respeito
            </a>
          </p>
          <div className="collapse" id="collapseExample4">
            <div className="card card-body">
              Em tempos de redes sociais e acessibilidade comunicacional, nada
              melhor que estabelecer canais que promovam a conscientização para
              um público maior. O conhecimento é fundamental para que haja
              respeito, compreensão e amor, e como sociedade devemos ser um
              pouco menos julgadores e aceitar as pessoas como elas são, ser
              mais tolerantes e o mais importante não despreza-las
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ButtonAjuda;
