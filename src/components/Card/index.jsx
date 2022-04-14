import { useEffect, useRef, useState } from "react";
import api from "../../services/api";
import * as S from "./styles";
import randomItem from "random-item";
import { useRouter } from "next/router";
import Router from "next/router";
import { parseCookies, setCookie } from "nookies";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Card = () => {
  const router = useRouter();
  const [countries, setCoutries] = useState([]);
  const { contador = 0 } = parseCookies();
  const sentence1 = "is the capital of";
  const sentence2 = "Which country does this flag belong to?  ";
  const sentences = [sentence1, sentence2];

  let container = "";

  let element = "";

  useEffect(() => {
    getDados();
  }, []);

  async function getDados() {
    await api.get("/all").then((response) => setCoutries(response.data));
  }

  const country1 = countries[Math.floor(Math.random() * countries.length)];
  const frase = sentences[Math.floor(Math.random() * sentences.length)];
  const randomSentences = randomItem.multiple(countries, 3);

  randomSentences.push(country1);

  function shuffle(o) {
    for (
      var j, x, i = o.length;
      i;
      j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
  }

  function refresh() {
    try {
      element.classList.remove("certo");
      element.classList.remove("errado");
      container.classList.remove("block");

      Router.push("/");
    } catch (error) {
      alert("You have to choose an answer!!");
    }
  }

  shuffle(randomSentences);

  function verificarSeEstaCerto(e) {
    try {
      container = document.getElementById("container-options");
      let certo = e.target.outerText;
      element = e.target.parentElement;

      if (certo === country1.name.common) {
        element.classList.add("certo");
        container.classList.add("block");
        setCookie(null, "contador", parseInt(contador) + 1, {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
      } else {
        element.classList.add("errado");
        container.classList.add("block");
        router.push("/result");
      }
    } catch (error) {
      console.log(e);
    }
  }

  return (
    <>
      <div style={{ display: "flex", alignItems: "flex-end", height: "67px" }}>
        <S.Titulo>COUNTRY QUIZ</S.Titulo>
        <S.Imagem src="image/img1.svg" alt="Imagem card" />
      </div>
      <S.Wrapper>
        {country1 && (
          <>
            {frase === sentence2 && (
              <S.FlagImage src={country1.flags.png} alt="Bandeira" />
            )}
            <S.Question>
              {frase === sentence1 && country1.capital} {" " + frase}
            </S.Question>
          </>
        )}

        {!!randomSentences && (
          <>
            <div id="container-options">
              <S.OptionA>
                <S.Item>A</S.Item>
                <S.ItemValue onClick={verificarSeEstaCerto}>
                  {randomSentences[0] ? (
                    randomSentences[0].name.common
                  ) : (
                    <>
                      <span>Clube</span>
                    </>
                  )}
                </S.ItemValue>
                {/* <S.IconCorrect /> */}
                {/* <S.IconIncorrect/>  */}
              </S.OptionA>
              <S.OptionB>
                <S.Item>B</S.Item>
                <S.ItemValue onClick={verificarSeEstaCerto}>
                  {randomSentences[1] ? (
                    randomSentences[1].name.common
                  ) : (
                    <>
                      <span>de Regatas</span>
                    </>
                  )}
                </S.ItemValue>
                {/* <S.IconCorrect /> */}
                {/* <S.IconIncorrect/>  */}
              </S.OptionB>
              <S.OptionC>
                <S.Item>C</S.Item>
                <S.ItemValue onClick={verificarSeEstaCerto}>
                  {randomSentences[2] ? (
                    randomSentences[2].name.common
                  ) : (
                    <>
                      <span>Vasco</span>
                    </>
                  )}
                </S.ItemValue>
                {/* <S.IconCorrect /> */}
                {/* <S.IconIncorrect/>  */}
              </S.OptionC>
              <S.OptionD>
                <S.Item>D</S.Item>
                <S.ItemValue onClick={verificarSeEstaCerto}>
                  {randomSentences[3] ? (
                    randomSentences[3].name.common
                  ) : (
                    <>
                      <span>da Gama</span>
                    </>
                  )}
                </S.ItemValue>
                {/* <S.IconCorrect /> */}
                {/* <S.IconIncorrect/>  */}
              </S.OptionD>
            </div>
          </>
        )}

        <S.Button onClick={refresh}>Next</S.Button>
      </S.Wrapper>
    </>
  );
};

export default Card;
