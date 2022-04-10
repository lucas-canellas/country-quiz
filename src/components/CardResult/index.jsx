import * as S from "./styles";

const CardResult = () => (
  <>
    <S.Titulo>COUNTRY QUIZ</S.Titulo>
    <S.Wrapper>
      <S.Imagem src="image/img2.svg" alt="Imagem card" />
      <S.Results>Results</S.Results>
      <S.NumberCorrect>
        You got <span>4</span> correct answers
      </S.NumberCorrect>
      <S.Button>Try again</S.Button>
    </S.Wrapper>
  </>
);

export default CardResult;
