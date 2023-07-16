const URL = process.env.REACT_APP_URL;
const userToken = sessionStorage.getItem('userToken');
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${userToken}`,
};

// 현재 나의 스킬 불러오기 함수
export async function fetchMySkillList() {
  const response = await fetch(`${URL}/api/skills/myskill`, {
    headers: headers,
  });
  return response.json();
}

// 현재 나의 커리어 불러오기 함수
export async function fetchMyCareerList() {
  const response = await fetch(`${URL}/api/careers`, {
    headers: headers,
  });
  return response.json();
}

// 현재 나의 교육 불러오기 함수
export async function fetchMyEduList() {
  const response = await fetch(`${URL}/api/educations`, {
    headers: headers,
  });
  return response.json();
}

// 현재 나의 링크 불러오기 함수
export async function fetchMyLinkList() {
  const response = await fetch(`${URL}/api/links`, {
    headers: headers,
  });
  return response.json();
}

// 경력 삭제 요청 핸들러
export async function handleRemoveCareer(careerId: string) {
  const response = await fetch(`${URL}/api/careers/delete`, {
    method: 'DELETE',
    headers: headers,
    body: JSON.stringify({ id: careerId }),
  });

  if (!response.ok) {
    throw new Error('Failed to delete career');
  }
}

// 교육 삭제 요청 핸들러
export async function handleRemoveEdu(eduId: string) {
  const response = await fetch(`${URL}/api/educations`, {
    method: 'DELETE',
    headers: headers,
    body: JSON.stringify({ id: eduId }),
  });

  if (!response.ok) {
    throw new Error('Failed to delete edu');
  }
}

// 링크 삭제 요청 핸들러
export async function handleRemoveLink(linkId: string) {
  const response = await fetch(`${URL}/api/links/delete`, {
    method: 'DELETE',
    headers: headers,
    body: JSON.stringify({ linkId: linkId }),
  });

  if (!response.ok) {
    throw new Error('Failed to delete link');
  }
}
