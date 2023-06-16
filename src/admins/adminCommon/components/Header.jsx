import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import jwt_decode from 'jwt-decode';
import DefaultImg from '../../../assets/images/rabbitProfile.png';
import { ReactComponent as LogoIcon } from '../../../assets/icons/logo1.svg';
import {
  Content,
  AdminName,
  Container,
  MenuContainer,
  AdminInfoBlock,
} from '../styledComponents/HeaderStyle';

const Header = () => {
  const [token, setToken] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const { pathname } = window.location;

  useEffect(() => {
    const sessionToken = sessionStorage.getItem('adminToken');
    if (sessionToken && token !== sessionToken) {
      const decodedToken = jwt_decode(sessionToken);
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
          <Link to='/admin/users'>
            <LogoIcon />
          </Link>
        </MenuContainer>
        <AdminInfoBlock>
          <img src={DefaultImg} alt='기본 이미지' width={40} />
          <AdminName>{name ? `${name}님` : ''}</AdminName>
        </AdminInfoBlock>
      </Content>
    </Container>
  );
};

export default Header;
