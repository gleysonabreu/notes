import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderPage, TopBarContainer, TitlePage } from './styles';
import arrowBackPage from '../../assets/images/arrowBack.png';

interface IHeaderProps {
  arrowBack?: boolean;
}

const Header: React.FC<IHeaderProps> = ({ arrowBack }) => (
  <HeaderPage>
    <TopBarContainer>
      {arrowBack && (
        <Link to="/">
          <img src={arrowBackPage} alt="Back Page" />
        </Link>
      )}
      <TitlePage>Notes</TitlePage>
    </TopBarContainer>
  </HeaderPage>
);

export default Header;
