const domainPort = process.env.REACT_APP_URL;

export const fetchSignInAdmin = async (adminInfo) => {
  const response = await fetch(`${domainPort}/api/admins/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(adminInfo),
  });

  return response.ok;
};
