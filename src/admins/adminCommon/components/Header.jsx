import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import jwt_decode from 'jwt-decode';
import DefaultImg from '../../../assets/images/rabbitProfile.png';
import { ReactComponent as LogoIcon } from '../../../assets/icons/logo1.svg';
import {
  AdminInfoBlock,
  AdminName,
  Container,
  Content,
  MenuContainer,
} from '../styledComponents/HeaderStyle';

const Header = () => {
  const [token, setToken] = useState('');
  const navigate = useNavigate();
  let name = '';

  useEffect(() => {
    const sessionToken = sessionStorage.getItem('adminToken');
    if (sessionToken && token !== sessionToken) {
      const decodedToken = jwt_decode(sessionToken);
      name = decodedToken.name;
      setToken(sessionToken);
      console.log(name);
    } else {
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
