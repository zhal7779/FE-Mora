import styled from 'styled-components';

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 208px;
  padding-top: 4rem;
  padding-bottom: 3.6rem;

  & h1 {
    margin-bottom: 1.6rem;

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
`;
const SideBarBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border: none;
  margin: 0;

  background-color: #fff;
`;
const SideBarListSvg = styled.svg`
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 0.8rem;

  line-height: 2.4rem;
  vertical-align: middle;
`;
const ManagementListTitle = styled.span`
  color: #adadad;

  font-size: 1.8rem;
  font-weight: bold;
`;

export { SideBar, SideBarBtn, SideBarListSvg, ManagementListTitle };
