export const changePlanForm = (plan) => {
  const newLinks = plan.links.split('\n').map((link) => {
    return { url: link };
  });
  const newContents = { ...plan, links: newLinks };

  newContents.start_date = newContents.startDate;
  newContents.end_date = newContents.endDate;
  delete newContents.startDate;
  delete newContents.endDate;

  return newContents;
};
