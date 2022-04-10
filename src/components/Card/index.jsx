import { useEffect, useState } from "react";
import api from "../../services/api";
import * as S from "./styles";
import randomItem from "random-item";

const Card = () => {
  const [countries, setCoutries] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    getDados();
  }, []);

  async function getDados() {
    await api.get("/all").then((response) => setCoutries(response.data));
  }

  const country1 = countries[Math.floor(Math.random() * countries.length)];

  const vasco = randomItem.multiple(countries, 4);

  console.log(vasco);
  return (
    <>
      <div style={{ display: "flex", alignItems: "flex-end", height: "67spx" }}>
        <S.Titulo>COUNTRY QUIZ</S.Titulo>
        <S.Imagem src="image/img1.svg" alt="Imagem card" />
      </div>
      <S.Wrapper>
        <S.FlagImage src="https://flagcdn.com/w320/br.png" alt="Bandeira" />
        {country1 && (
          <S.Question> {country1.capital} is the capital of</S.Question>
        )}

        <S.Option>
          <S.Item>A</S.Item>
          <S.ItemValue>{country1 && country1.name.common}</S.ItemValue>
          <S.IconCorrect />
          {/* <S.IconIncorrect/>  */}
        </S.Option>
        {vasco.map((teste) => {
          <S.Option>
            <S.Item>A</S.Item>
            <S.ItemValue>{teste && teste.name.common}</S.ItemValue>
            <S.IconCorrect />
            {/* <S.IconIncorrect/>  */}
          </S.Option>;
        })}

        <S.Button>Next</S.Button>
      </S.Wrapper>
    </>
  );
};

export default Card;
