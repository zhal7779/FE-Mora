"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenProfilePageWrapper = exports.SchedulePageWrapper = exports.NoDataWrapper = exports.SearchPageWrapper = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.SearchPageWrapper = styled_components_1.default.main `
  padding: 6rem 0;
  width: 1024px;
  height: 100%;
  display: flex;
  margin: 22rem auto 0 auto;
  justify-content: space-between;
  > div {
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    width: 100%;
    gap: 5rem;
    align-items: center;
    > div {
      width: 100%;
      align-items: center;
    }
  }
`;
exports.NoDataWrapper = styled_components_1.default.div `
  display: flex;
  margin: 0 auto;
`;
exports.SchedulePageWrapper = styled_components_1.default.main `
  width: 1024px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-bottom: 10rem;
  }
`;
exports.OpenProfilePageWrapper = styled_components_1.default.main `
  width: 1024px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-bottom: 10rem;
    .profile_content {
      margin: 0 2.4rem;
    }
  }

  @media (max-width: 480px) {
    .profile_content {
      margin: 0 1rem;
    }
  }
`;
