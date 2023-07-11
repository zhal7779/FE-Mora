export const serverToClient = (obj) => {
  Object.keys(obj).map((keyName) => {
    const matchedKeyName = keyName.match(/_[a-z]/g);

    if (matchedKeyName) {
      const toChangeKeyName = keyName.replace(/_[a-z]/g, (match) => match[1].toUpperCase());

      obj[toChangeKeyName] = obj[keyName];
      delete obj[keyName];
    }
  });
};

export const clientToServer = (obj) => {
  Object.keys(obj).map((keyName) => {
    const matchedKeyName = keyName.match(/[A-Z]/g);

    // mysql 자동 생성 변수라서 바꿔주면 안 됨.
    if (matchedKeyName && matchedKeyName !== 'createdAt' && matchedKeyName !== 'updatedAt') {
      const toChangeKeyName = keyName.replace(/[A-Z]/g, (match) => '_' + match[0]);

      obj[toChangeKeyName] = obj[keyName];
      delete obj[keyName];
    }
  });
};
