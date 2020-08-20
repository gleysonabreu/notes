import styled from 'styled-components';

export const Main = styled.main`
  width: 90%;
  margin: 3.2rem auto;
  display: flex;
  flex-direction: column;
`;

export const Menu = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.background.backgroundGray}; 
`;

export const MenuUL = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuLI = styled.li`
  padding: 0.5rem;
  border-radius: 0.8rem;
  transition: background 0.3s;

  & + & {
    margin-left: 3.2rem;
  }
  a{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: #000;
    text-decoration: none;
    font: 500 2rem Archivo;
    img{
      height: 3.5rem;
    }
  }

  &:hover{
    background: ${(props) => props.theme.colors.colorTitle};
  }
`;

export const Notes = styled.ul`
  background: ${(props) => props.theme.colors.background.backgroundNotes};
  margin-top: 2rem;
  padding: 2rem;
  list-style: none;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 330px;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  border-radius: 0.8rem;

  @media(min-width: 900px){
      grid-template-columns: 400px 400px;
  }
`;

export const HomeContent = styled.div`
  width: 100vw !important;
  height: 100vh;
  overflow: auto;

  @media(min-width: 700px){
    max-width: 100% !important;
  }

`;
