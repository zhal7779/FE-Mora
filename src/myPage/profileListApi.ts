const URL = process.env.REACT_APP_URL;
const userToken = sessionStorage.getItem('userToken');
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${userToken}`,
};

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
