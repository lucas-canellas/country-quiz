import styled from "styled-components";

export const Wrapper = styled.div`
  width: 464px;
  text-align: center;
  background-color: #fff;
  border-radius: 2.4rem;
  padding: 3.2rem;
`;

export const Titulo = styled.h1`
  color: #f2f2f2;
  font-size: 3.6rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const Imagem = styled.img`
  width: 22.8rem;
  margin-bottom: 7rem;
`;

export const Results = styled.h1`
  font-weight: 700;
  font-size: 4.8rem;
  color: #1d355d;
`;

export const NumberCorrect = styled.p`
  font-weight: 400;
  font-size: 1.8rem;
  color: #1d355d;
  margin-bottom: 7rem;

  span {
    font-weight: 700;
    font-size: 3.6rem;
    color: #6fcf97;
  }
`;

export const Button = styled.button`
  border-radius: 1.2rem;
  border: 2px solid #1d355d;
  color: #1d355d;
  padding: 1.9rem 0;
  width: 210px;
  background-color: #fff;
  font-size: 1.8rem;
  font-weight: 700;
  cursor: pointer;
`;
