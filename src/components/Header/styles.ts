import styled from 'styled-components';

export const HeaderPage = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background.backgroundBlue};
  position: relative;
  align-items: center;
  border-bottom: 2px solid ${(props) => props.theme.colors.colorTitle};
  height: 80px;
`;

export const TopBarContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 1.3rem;

  a{
    transition: opacity 0.2s;
    display: flex;
    align-items: center;
    img{
      height: 52px;
      margin-right: 1.0rem;
    }
  }

  a:hover {
    opacity: 0.6;
  }

`;

export const TitlePage = styled.h1`
  font: 700 3.6rem Poppins;
  color: ${(props) => props.theme.colors.colorTitle};
  text-transform: uppercase;
`;
