const domainPort = process.env.REACT_APP_URL;

export const fetchSignInAdmin = async (adminInfo) => {
  console.log(adminInfo);
  const response = await fetch(`${domainPort}/api/admins/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(adminInfo),
  });

  console.log(response.ok);
  return response.ok;
};
