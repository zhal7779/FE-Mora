const domainPort = process.env.REACT_APP_URL;

export const fetchLogInAdmin = async (adminInfo) => {
  const response = await fetch(`${domainPort}/api/admins/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(adminInfo),
  });

  const data = await response.json();

  return data;
};
