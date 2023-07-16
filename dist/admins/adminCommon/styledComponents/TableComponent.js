"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageNationBlockBtn = exports.PageNationBlock = exports.DetailBtn = exports.UserInfo = exports.TableTitle = exports.TableRowInfo = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
// 테이블 요소들
const tableRowSetting = `
display: grid;
grid-template-columns: 4.5rem 5.5rem 22rem 12rem 12rem 9rem 6.5rem;
grid-template-rows: 5rem;
justify-items: center;
align-items: center;

& > span {
	font-size: 1.4rem;
}`;
const TableRowInfo = styled_components_1.default.div `
  ${tableRowSetting}
  border-bottom: 1px solid #000;

  font-weight: 'bold';
`;
exports.TableRowInfo = TableRowInfo;
const UserInfo = styled_components_1.default.li `
  ${tableRowSetting}
  border-bottom: 1px solid #d6c9ff;

  &:nth-child(even) {
    background-color: #faf7ff;
  }
`;
exports.UserInfo = UserInfo;
const TableTitle = styled_components_1.default.h2 `
  margin-bottom: 2rem;

  font-size: 1.8rem;
  font-weight: bold;
`;
exports.TableTitle = TableTitle;
const DetailBtn = styled_components_1.default.button `
  padding: 0.7rem 1rem 0.6rem 1rem;
  border: 1px solid #d9d9d9;
  border-radius: 0.4rem;

  background-color: #fcfcfe;

  font-weight: 500;
`;
exports.DetailBtn = DetailBtn;
// 페이지네이션
const PageNationBlock = styled_components_1.default.div `
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 6rem;
  margin-bottom: 10rem;
`;
exports.PageNationBlock = PageNationBlock;
const PageNationBlockBtn = styled_components_1.default.button `
  width: 3rem;
  height: 3rem;
  padding-left: 0.1rem;
  border: 1px solid gray;
  border-radius: 0.4rem;

  background-color: #fff;

  font-size: 1.4rem;
  text-align: center;
  line-height: 3rem;

  &.now-page {
    border: none;

    background-color: #7353ea;
  }
  &.now-page > p {
    color: #ffffff;
  }
`;
exports.PageNationBlockBtn = PageNationBlockBtn;
