import { useEffect, useRef, useState } from "react";
import api from "../../services/api";
import * as S from "./styles";
import randomItem from "random-item";
import { useRouter } from "next/router";
import Router from "next/router";
import { parseCookies, setCookie, destroyCookie } from "nookies";

const Card = () => {
  const router = useRouter();
  const [countries, setCoutries] = useState([]);
  const { contador = 0 } = parseCookies();
  const frase1 = "is the capital of";
  const frase2 = "Which country does this flag belong to?  ";
  const frases = [frase1, frase2];
  const optionRef = useRef(null);

  useEffect(() => {
    getDados();
  }, []);

  async function getDados() {
    await api.get("/all").then((response) => setCoutries(response.data));
  }

  const country1 = countries[Math.floor(Math.random() * countries.length)];
  const frase = frases[Math.floor(Math.random() * frases.length)];

  const vasco = randomItem.multiple(countries, 3);

  vasco.push(country1);

  function shuffle(o) {
    for (
      var j, x, i = o.length;
      i;
      j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
  }

  function refresh() {
    setCookie(null, "contador", parseInt(contador) + 1, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });

    Router.push("/");
  }

  shuffle(vasco);

  function verificarSeEstaCerto(e) {
    let certo = e.target.outerText;

    if (certo === country1.name.common) {
      /* e.target.parentElement.style.backgroundColor = "green"; */
      optionRef.current.style.backgroundColor = "pink";
    } else {
      e.target.parentElement.style.backgroundColor = "red";
      router.push("/result");
    }
  }

  console.log(vasco);

  return (
    <>
      <div style={{ display: "flex", alignItems: "flex-end", height: "67spx" }}>
        <S.Titulo>COUNTRY QUIZ</S.Titulo>
        <S.Imagem src="image/img1.svg" alt="Imagem card" />
      </div>
      <S.Wrapper>
        {country1 && (
          <>
            {frase === frase2 && (
              <S.FlagImage src={country1.flags.png} alt="Bandeira" />
            )}
            <S.Question>
              {frase === frase1 && country1.capital}
              {frase}
            </S.Question>
          </>
        )}

        {!!vasco && (
          <>
            <S.Option ref={optionRef}>
              <S.Item>A</S.Item>
              <S.ItemValue onClick={verificarSeEstaCerto}>
                {vasco[0] && vasco[0].name.common}
              </S.ItemValue>
              {/* <S.IconCorrect /> */}
              {/* <S.IconIncorrect/>  */}
            </S.Option>
            <S.Option ref={optionRef}>
              <S.Item>A</S.Item>
              <S.ItemValue onClick={verificarSeEstaCerto}>
                {vasco[1] && vasco[1].name.common}
              </S.ItemValue>
              {/* <S.IconCorrect /> */}
              {/* <S.IconIncorrect/>  */}
            </S.Option>
            <S.Option ref={optionRef}>
              <S.Item>A</S.Item>
              <S.ItemValue onClick={verificarSeEstaCerto}>
                {vasco[2] && vasco[2].name.common}
              </S.ItemValue>
              {/* <S.IconCorrect /> */}
              {/* <S.IconIncorrect/>  */}
            </S.Option>
            <S.Option ref={optionRef}>
              <S.Item>A</S.Item>
              <S.ItemValue onClick={verificarSeEstaCerto}>
                {vasco[3] && vasco[3].name.common}
              </S.ItemValue>
              {/* <S.IconCorrect /> */}
              {/* <S.IconIncorrect/>  */}
            </S.Option>
          </>
        )}

        <S.Button onClick={refresh}>Next</S.Button>
      </S.Wrapper>
    </>
  );
};

export default Card;
