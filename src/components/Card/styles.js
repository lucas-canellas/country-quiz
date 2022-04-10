import styled, { css } from "styled-components";
import { MdOutlineCancel } from "react-icons/md";
import { MdCheckCircleOutline } from "react-icons/md";

export const Titulo = styled.h1`
  color: #f2f2f2;
  font-size: 3.6rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const Imagem = styled.img`
  position: relative;
  top: 40px;
`;

export const Wrapper = styled.div`
  width: 464px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 2.4rem;
  padding: 7.2rem 3.2rem 3.2rem;
`;

export const Question = styled.h1`
  color: #2f527b;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 3.2rem;
`;

export const FlagImage = styled.img`
  width: 8.4rem;
`;

export const Option = styled.div`
  border-radius: 1.2rem;
  border: 2px solid rgba(96, 102, 208, 0.7);
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-bottom: 2.5rem;
  color: rgba(96, 102, 208, 0.8);

  &:hover {
    background-color: #f9a826;
    color: #fff;
    border: 2px solid #f9a826;
  }
`;

export const Item = styled.h1``;

export const ItemValue = styled.h1`
  margin-left: 4.4rem;
`;

export const IconCorrect = styled(MdOutlineCancel)`
  color: #f2f2f2;
  font-size: 2rem;
  margin-left: auto;
`;

export const IconIncorrect = styled(MdCheckCircleOutline)`
  color: #f2f2f2;
  margin-left: auto;
`;

export const Button = styled.button`
  background: #f9a826;
  border-radius: 1.2rem;
  padding: 1.5rem 0;
  width: 11.6rem;
  border: none;
  align-self: flex-end;
  cursor: pointer;

  /* TEXTO */

  color: #fff;
  font-weight: 700;
  font-size: 1.8rem;
`;
