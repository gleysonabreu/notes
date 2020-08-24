import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { HeaderPage, TopBarContainer, TitlePage } from './styles';

interface IHeaderProps {
  arrowBack?: boolean;
}

const Header: React.FC<IHeaderProps> = ({ arrowBack }) => (
  <HeaderPage>
    <TopBarContainer>
      {arrowBack && (
        <Link to="/">
          <IoIosArrowBack size={50} color="#65AFFF" />
        </Link>
      )}
      <TitlePage>Notes</TitlePage>
    </TopBarContainer>
  </HeaderPage>
);

export default Header;
