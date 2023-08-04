const domainPort = process.env.REACT_APP_URL;

interface NewTrackType {
  name: string;
  phase: string;
}

// READ
export const fetchReadTrackInfo = async (page: number, size: number, keyword: string) => {
  const adminToken = sessionStorage.getItem('adminToken');
  const response = await fetch(
    `${domainPort}/api/generations?page=${page}&size=${size}&keyword=${keyword}`,
    {
      headers: { Authorization: `Bearer ${adminToken}` },
    }
  );
  const data = await response.json();

  return data;
};

export const fetchReadTrackInfoDetail = async (id: string) => {
  const adminToken = sessionStorage.getItem('adminToken');
  const response = await fetch(`${domainPort}/api/generations/${id}`, {
    headers: { Authorization: `Bearer ${adminToken}` },
  });
  const data = await response.json();

  return data;
};

// CREATE
export const fetchCreateTrack = async (newTrack: NewTrackType) => {
  const adminToken = sessionStorage.getItem('adminToken');
  const response = await fetch(`${domainPort}/api/generations`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${adminToken}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newTrack),
  });

  const data = await response.json();
  return data;
};

// UPDATE
export const fetchUpdateTrack = async (id: string, newTrack: NewTrackType) => {
  const adminToken = sessionStorage.getItem('adminToken');
  const response = await fetch(`${domainPort}/api/generations/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${adminToken}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify(newTrack),
  });

  const data = await response.json();

  return data;
};

// DELETE
export const fetchDeleteTrack = async (id: string) => {
  const adminToken = sessionStorage.getItem('adminToken');
  const response = await fetch(`${domainPort}/api/generations/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${adminToken}`,
    },
  });

  return response.status;
};
