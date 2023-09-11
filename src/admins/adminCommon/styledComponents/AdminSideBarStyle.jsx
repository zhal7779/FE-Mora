import styled from 'styled-components';

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 208px;
  padding-top: 4rem;
  padding-bottom: 3.6rem;

  & h1 {
    margin-bottom: 2.5rem;

    font-size: 2.4rem;
    font-weight: bold;
  }
  & .management-list > p {
    display: inline-block;
    margin-bottom: 1.4rem;

    color: #64748b;

    font-size: 1.2rem;
    font-weight: 900;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
export const SideBarButtonBlock = styled.button`
  width: 8rem;
  height: 3.7rem;
  padding: 0.7rem 1.5rem;
  border-radius: 0.4rem;

  font-size: 1.4rem;
  font-weight: bold;

  background-color: #bba8fd;
  color: #fff;

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #7356b8;
  }
`;
export const SideBarBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border: none;
  margin: 0;

  background-color: #fff;

  &:hover {
    & path.stroke {
      stroke: ${(props) => props.hoverColor};
      transition: stroke 0.2s ease-in-out;
    }
    & path.fill {
      fill: ${(props) => props.hoverColor};
      transition: fill 0.2s ease-in-out;
    }
    & span {
      color: #000;
    }
  }
`;
export const SideBarListSvg = styled.svg`
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 0.8rem;

  line-height: 2.4rem;
  vertical-align: middle;
`;
export const ManagementListTitle = styled.span`
  color: #adadad;

  font-size: 1.8rem;
  font-weight: bold;

  transition: all 0.2s ease-in-out;
`;
