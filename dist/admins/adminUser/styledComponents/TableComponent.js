"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrollButton = exports.MainContentHeaderBlock = exports.PageNationBlockBtn = exports.PageNationBlock = exports.DetailBtn = exports.TableSearchResult = exports.TableTitle = exports.TableTitleBlock = exports.UserInfo = exports.TableRowInfo = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const ModalComponents_1 = require("./ModalComponents");
// 테이블 요소들
const tableRowSetting = `
  display: grid;
  grid-template-columns: 100px 220px 160px 160px 80px 80px;
  grid-template-rows: 5rem;
  justify-items: center;
  align-items: center;

  & > span {
    font-size: 1.4rem;
  }
  @media (max-width: 376px) {
    grid-template-columns: 180px 50px 50px;
    & > span {
      font-size: 1.4rem;
    }
  }
  @media (min-width: 376px) and (max-width: 768px) {
    grid-template-columns: 115px 220px 100px 100px;
  }
`;
exports.TableRowInfo = styled_components_1.default.div `
  ${tableRowSetting}
  border-bottom: 1px solid #000;

  font-weight: 'bold';

  @media (max-width: 376px) {
    & .이름,
    & .비밀번호,
    & .가입날짜 {
      display: none;
    }
  }
  @media (min-width: 376px) and (max-width: 768px) {
    & .비밀번호,
    & .가입날짜 {
      display: none;
    }
  }
`;
exports.UserInfo = styled_components_1.default.li `
  ${tableRowSetting}
  border-bottom: 1px solid #d6c9ff;

  &:nth-child(even) {
    background-color: #faf7ff;
  }

  & .email,
  & .password {
    max-width: 140px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  & .password {
    max-width: 13rem;
  }

  @media (max-width: 376px) {
    & .name,
    & .password,
    & .created-date {
      display: none;
    }
  }
  @media (min-width: 376px) and (max-width: 768px) {
    & .password,
    & .created-date {
      display: none;
    }
  }
`;
exports.TableTitleBlock = styled_components_1.default.div `
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
`;
exports.TableTitle = styled_components_1.default.h2 `
  font-size: 1.8rem;
  font-weight: bold;
`;
exports.TableSearchResult = styled_components_1.default.h3 `
  font-size: 1.6rem;
  font-weight: 500;

  color: #aeaeae;
`;
exports.DetailBtn = styled_components_1.default.button `
  padding: 0.7rem 1rem 0.6rem 1rem;
  border: 1px solid #d9d9d9;
  border-radius: 0.4rem;

  background-color: #fcfcfe;

  font-weight: 500;
`;
// 페이지네이션
exports.PageNationBlock = styled_components_1.default.div `
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 6rem;
  margin-bottom: 10rem;
`;
exports.PageNationBlockBtn = styled_components_1.default.button `
  width: 3rem;
  height: 3rem;
  padding-left: 0.1rem;
  border: 1px solid gray;
  border-radius: 0.4rem;

  background-color: #fff;

  font-size: 1.4rem;
  text-align: center;
  line-height: 3rem;

  cursor: pointer;

  &.now-page {
    border: none;

    background-color: #7353ea;
  }
  &.now-page > p {
    color: #ffffff;
  }
`;
exports.MainContentHeaderBlock = styled_components_1.default.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;
exports.EnrollButton = (0, styled_components_1.default)(ModalComponents_1.ModalButton) `
  padding: 0.7rem 1.5rem;
`;
