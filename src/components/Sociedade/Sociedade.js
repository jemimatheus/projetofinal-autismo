import React from 'react'
import img from '../../assets/maos.jpg'
import ButtonAjuda from  '../../components/ButtonAjuda/ButtonAjuda'


const Sociedade = () => {

    return (
      <article id="three" className="post style2">
        <div className="image">
          <img src={img} alt="mão dadas" data-position="80% center" />
        </div>
        <div className="content">
          <div className="inner" id="sociedade">
            <header>
              <h2>Sociedade</h2>
            </header>
            <p>
              A família de um autista sofre com a rejeição que é praticado pela
              sociedade, a tal segregação do comportamento que é considerado
              certo ou errado.<span> Isso coloca as famílias numa situação difícil e muitas vezes se
              sentem julgadas ou questionadas por desconhecidos diante de
              certos comportamentos que são interpretados como estranhos</span>
              : quando as crianças gritam de emoção em uma loja, quando comem em
              um restaurante e têm mais comida no rosto do que no prato, quando
              andam pela rua e começam a correr de repente... As pessoas olham,
              as pessoas julgam e as pessoas falam sem saber. Isso é realmente
              muito difícil. Mas não consideram que é uma criança ou adulto que
              só tem um comportamento diferente das demais. Os pais, os
              familiares e a equipe responsável pelo tratamento conhecem quais
              são os pontos que significam desafio para a pessoa autista, então
              é preciso saber como trabalhá-los, mas de forma que possibilite a
              inclusão.
            </p>
            <ButtonAjuda />
          </div>
          <div className="postnav">
            <a href="#two" className="scrolly prev">
              <span className="icon fa-chevron-up"></span>
            </a>
            <a href="#four" className="scrolly next">
              <span className="icon fa-chevron-down"></span>
            </a>
          </div>
        </div>
      </article>
    );
}


export default Sociedade;