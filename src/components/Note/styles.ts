import styled from 'styled-components';
import { shade } from 'polished';

interface INoteProps {
  color: string;
}

export const Notes = styled.li<INoteProps>`
  border-radius: 0.8rem;
  background: ${(props) => props.color};
  overflow: hidden;
  padding-bottom: 1rem;
  max-height: 200px;
  width: 100%;

  @media(min-width: 700px){
    min-height: 200px;
    max-height: 200px;
  }
`;

export const HeaderNote = styled.header<INoteProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  width: 100%;
  border-radius: 0.8rem;
  background: ${(props) => shade(0.1, props.color)};
`;

export const TitleNote = styled.h2`
  font: 700 1.8rem Poppins;
`;

export const MessageNote = styled.div`
  width: 100%;
  padding: 1rem;

  p{
    font: 400 1.7rem Archivo;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border:0;
  background: transparent;
  cursor: pointer;
  outline: 0;
`;
