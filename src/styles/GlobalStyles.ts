import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root{
    font-size: 60%;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body, input, button, textarea {
    font: 500 1.6rem Poppins;
  }

  @media(min-width: 700px){
    :root{
      font-size: 62.5%;
    }
  }

  .container{
    width: 90vw;
    max-width: 700px;
    background: ${(props) => props.theme.colors.background.backgroundGray};
  }

  .selected{
    border: 2px solid #56ba84;
  }


`;

export default GlobalStyles;
