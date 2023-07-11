export const snakeToCamel = (obj) => {
  Object.keys(obj).map((keyName) => {
    const matchedKeyName = keyName.match(/_[a-z]/g);

    if (matchedKeyName) {
      const toChangeKeyName = keyName.replace(/_[a-z]/g, (match) => match[1].toUpperCase());

      obj[toChangeKeyName] = obj[keyName];
      delete obj[keyName];
    }
  });
};

export const camelToSnake = (obj) => {
  Object.keys(obj).map((keyName) => {
    const matchedKeyName = keyName.match(/[A-Z]/g);

    if (matchedKeyName && matchedKeyName !== 'createdAt' && matchedKeyName !== 'updatedAt') {
      const toChangeKeyName = keyName.replace(/[A-Z]/g, (match) => '_' + match[0].toLowerCase());

      obj[toChangeKeyName] = obj[keyName];
      delete obj[keyName];
    }
  });
};
