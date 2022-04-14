import * as S from "./styles";
import { parseCookies, destroyCookie } from "nookies";
import { useRouter } from "next/router";

const CardResult = () => {
  const router = useRouter();
  const { contador } = parseCookies();

  function restart() {
    destroyCookie(null, "contador");
    router.push("/");
  }

  return (
    <>
      <S.Titulo>COUNTRY QUIZ</S.Titulo>
      <S.Wrapper>
        <S.Imagem src="image/img2.svg" alt="Imagem card" />
        <S.Results>Results</S.Results>
        <S.NumberCorrect>
          You got <span>{contador ? contador : "0"}</span> correct answers
        </S.NumberCorrect>
        <S.Button onClick={restart}>Try again</S.Button>
      </S.Wrapper>
    </>
  );
};

export default CardResult;
