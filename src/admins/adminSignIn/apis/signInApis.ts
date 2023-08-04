const domainPort = process.env.REACT_APP_URL;

interface AdminInfoProps {
  email: string;
  name: string;
  password: string;
}

export const fetchSignInAdmin = async (adminInfo: AdminInfoProps) => {
  const response = await fetch(`${domainPort}/api/admins/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(adminInfo),
  });

  return response.ok;
};
