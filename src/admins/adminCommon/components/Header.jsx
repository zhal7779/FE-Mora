import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DefaultImg from '../../../assets/images/rabbitProfile.png';
import { ReactComponent as LogoIcon } from '../../../assets/icons/logo1.svg';

const Container = styled.header`
  position: fixed;
  display: block;
  left: 0;
  right: 0;
  top: 0;
  height: 6rem;

  border-bottom: #cbd5e1 1px solid;
  background: #ffffff;
`;
const Content = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
`;
const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <Container>
      <Content>
        <MenuContainer>
          <Link to='/admin/users'>
            <LogoIcon />
          </Link>
        </MenuContainer>
      </Content>
    </Container>
  );
};

export default Header;
