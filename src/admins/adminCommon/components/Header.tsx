import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import jwt_decode from 'jwt-decode';
import DefaultImg from '../../../assets/images/rabbitProfile.png';
import { ReactComponent as LogoIcon } from '../../../assets/icons/logo1.svg';
import {
  Content,
  AdminName,
  Container,
  MenuContainer,
  AdminInfoBlock,
  HamburgerMenu,
  MenuBarUl,
  MenuBarLi,
} from '../styledComponents/HeaderStyle';

interface TokenData {
  name: string;
}

const Header = () => {
  const [token, setToken] = useState('');
  const [name, setName] = useState('');
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setMenu(!menu);
  };

  const { pathname } = window.location;

  useEffect(() => {
    const sessionToken = sessionStorage.getItem('adminToken');
    if (sessionToken && token !== sessionToken) {
      const decodedToken = jwt_decode<TokenData>(sessionToken);
      setName(decodedToken.name);
      setToken(sessionToken);
    } else if (pathname !== '/admin/signin') {
      navigate('/admin/login');
    }
  }, []);

  return (
    <Container>
      <Content>
        <MenuContainer>
          <Link to='/admin/posts'>
            <LogoIcon className='morae-logo' />
          </Link>
        </MenuContainer>
        <AdminInfoBlock className='user-logo'>
          <img src={DefaultImg} alt='기본 이미지' width={40} />
          <AdminName>{name ? `${name}님` : ''}</AdminName>
        </AdminInfoBlock>
        <div className='hamburger-menu-block' onClick={handleMenuClick}>
          <HamburgerMenu />
        </div>
        {menu && (
          <MenuBarUl>
            <Link to='/admin/posts'>
              <MenuBarLi>게시물 관리</MenuBarLi>
            </Link>
            <Link to='/admin/users'>
              <MenuBarLi>사용자 관리</MenuBarLi>
            </Link>
            <Link to='/admin/notifications'>
              <MenuBarLi>공지사항 관리</MenuBarLi>
            </Link>
            <Link to='/admin/plans'>
              <MenuBarLi>일정 관리</MenuBarLi>
            </Link>
            <Link to='/admin/tracks'>
              <MenuBarLi>트랙 관리</MenuBarLi>
            </Link>
          </MenuBarUl>
        )}
      </Content>
    </Container>
  );
};

export default Header;
