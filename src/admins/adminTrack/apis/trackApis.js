const domainPort = 'http://15.164.221.244:5000';
const adminToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRhNzg4OGI0LTliMWMtNDhmMy04Zjc4LTkyZWI4ODgxZDdiOSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4NjY0NDc2Nn0.lrsJDeO4V6O0ohBNW3UZ7R4S8nEx7wjq7I80HB6agsw';

// READ
export const fetchReadTrackInfo = async (page, size, keyword) => {
  const response = await fetch(
    `${domainPort}/api/generations?page=${page}&size=${size}&keyword=${keyword}`,
    {
      headers: { Authorization: `Bearer ${adminToken}` },
    }
  );
  const data = await response.json();
  // console.log(data);

  return data;
};

export const fetchReadTrackInfoDetail = async (id) => {
  const response = await fetch(`${domainPort}/api/generations/${id}`, {
    headers: { Authorization: `Bearer ${adminToken}` },
  });
  const data = await response.json();

  return data;
};

// CREATE
export const fetchCreateTrack = async (newTrack) => {
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
export const fetchUpdateTrack = async (id, newTrack) => {
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
export const fetchDeleteTrack = async (id) => {
  const response = fetch(`${domainPort}/api/generations/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${adminToken}`,
    },
  });

  return response.status;
};
