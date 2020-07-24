import React from 'react'
import mae from '../../assets/mae.jpg'




const Familia = () => {
  return (
    <article id="two" className="post invert style1 alt">
      <div className="image">
        <img src={mae} alt="Mãe" data-position="10% center" />
      </div>
      <div className="content">
        <div className="inner" id="familia">
          <header>
            <h2>
              Família
            </h2>
          </header>
          <p>
            O diagnóstico de um transtorno autista implica em muitas mudanças no
            âmbito familiar, especialmente na vida da mãe, que a partir do diagnóstico, precisará
            modificar a vida.<span> Às vezes as famílias se sentem sozinhas diante de um mundo que não
              as entende, </span>
            lutando pelo que acham melhor para seus filhos. Além de conviver com
            dificuldades internas, como a cronicidade da doença, os sintomas que
            causam constrangimento social, o rompimento dos vínculos e das
            atividades normais da família, ainda há as forças sociais externas.
           
            <span> É um processo que não deveria ser solitário</span>, mas em
            muitos casos é o que ocorre, é uma luta diária para manter o bem
            estar do portador e ter que lidar com a rejeição da sociedade.
            Portanto o apoio pode evitar o sofrimento e a solidão dos
            familiares, além de ampliar as possibilidades de colaboração e de
            sucesso na assistência ao familiar com autismo.
          </p>
        </div>
        <div className="postnav">
          <a href="#one" className="scrolly prev">
            <span className="icon fa-chevron-up"></span>
          </a>
          <a href="#three" className="scrolly next">
            <span className="icon fa-chevron-down"></span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default Familia;

