import styled from 'styled-components';

export const CreateNoteContent = styled.div`
  width: 100vw !important;
  height: 100vh;
  overflow: auto;

  @media(min-width: 700px){
    max-width: 100% !important;
  }
`;

export const Main = styled.main`
  width: 90%;
  margin: 3.2rem auto;
  display: flex;
  flex-direction: column;
`;

export const AddNote = styled.div`
  background: ${(props) => props.theme.colors.background.backgroundNotes};
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  flex-direction: column;
`;

export const Title = styled.h1`
  font: 700 3.0rem Poppins;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.0rem;
  flex-direction: column;
`;

export const Fieldset = styled.fieldset`
  border: 0;
  padding: 0 2.4rem;
  & + & {
    margin-top: 2.4rem;
  }
`;

export const Button = styled.button`
  
    width: 100%;
    padding: 1.2rem;
    border-radius: 0.8rem;
    border:0;
    background: ${(props) => props.theme.colors.colorTitle};
    cursor: pointer;
    transition: all 0.3s;

    &:hover{
      background: ${(props) => props.theme.colors.colorBackgroundHover};
      color: white;
    }

  @media(min-width: 700px){
    
      width: 535px;

  }
`;

export const Legend = styled.legend`
  font: 700 2.4rem Archivo;
  color: ${(props) => props.theme.colors.background.backgroundBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const InputBlock = styled.div`
  position: relative;
  input{
    width: 100%;
    height: 6.5rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
    background-color: ${(props) => props.theme.colors.background.backgroundBlue};
    color: white;
    border: 1px ${(props) => props.theme.colors.colorBackgroundHover};
  }

  @media(min-width: 700px){
    input{
      width: 535px;
    }
  }

  &:focus-within::after{
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: ${(props) => props.theme.colors.colorTitle};
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }
`;
export const TextAreaBlock = styled.div`
  position: relative;

  textarea{
    width: 100%;
    height: 16rem;
    min-height: 8rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background-color: ${(props) => props.theme.colors.background.backgroundBlue};
    border: 1px ${(props) => props.theme.colors.colorBackgroundHover};
    outline: 0;
    resize: vertical;
    padding: 1.2rem 1.6rem;
    font: 1.6rem Archivo;
    color: white;
  }

  @media(min-width: 700px){
    textarea{
      width: 535px;
    }
  }

  &:focus-within::after{
     width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: ${(props) => props.theme.colors.colorTitle};
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 7px;
  }
`;

export const ButtonColorNotes = styled.button<{ color: string }>`
  padding: 1.2rem;
  border-radius: 0.8rem;
  border:0;
  cursor: pointer;
  transition: all 0.3s;
  background: ${(props) => props.color};
  border: 2px solid ${(props) => props.color};
  outline: 0;

  & + & {
    margin-left: 1.0rem;
  }
`;

export const ColorNotes = styled.div`
  display: flex;
  margin-top: 1rem;
`;
