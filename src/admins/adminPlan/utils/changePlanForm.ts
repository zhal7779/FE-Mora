import { camelToSnake } from '../../adminCommon/utils/variableName';

interface NewPlanType {
  title: string;
  content: string;
  endDate: string;
  startDate: string;
  links: string;
  length?: number;
  startTime?: number;
  endTime?: number;
}

/**
 *
 * @param {*} plan
 * @description 클라이언트 데이터 구조를 서버 데이터 구조로 맞춰주는 함수
 * @example 'aa\nbb\n' -> [{url: 'aa'}, {url: 'bb'}, {url: 'cc'}]
 */

export const changePlanForm = (plan: NewPlanType) => {
  console.log(plan);
  let newLinks: { url: string }[] = [];

  if (plan.length) {
    newLinks = plan.links.split('\n').map((link) => {
      return { url: link };
    });
  }
  plan.startDate += ` ${plan.startTime || '00:00'}:00`;
  plan.endDate += ` ${plan.endTime || '00:00'}:00`;
  const newContents = { ...plan, links: newLinks };

  camelToSnake(newContents);
  delete newContents.startTime;
  delete newContents.endTime;

  return newContents;
};
