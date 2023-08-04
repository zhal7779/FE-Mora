export const snakeToCamel = <T extends { [key: string]: any }>(obj: T) => {
  Object.keys(obj).map((keyName) => {
    const matchedKeyName = keyName.match(/_[a-z]/g);

    if (matchedKeyName) {
      const toChangeKeyName = keyName.replace(/_[a-z]/g, (match) => match[1].toUpperCase());

      obj[toChangeKeyName as keyof T] = obj[keyName];
      delete obj[keyName];
    }
  });
};

export const camelToSnake = <T extends { [key: string]: any }>(obj: T) => {
  Object.keys(obj).map((keyName) => {
    const matchedKeyName = keyName.match(/[A-Z]/g);

    if (matchedKeyName && matchedKeyName[0] !== 'createdAt' && matchedKeyName[0] !== 'updatedAt') {
      console.log(matchedKeyName);
      const toChangeKeyName = keyName.replace(/[A-Z]/g, (match) => '_' + match[0].toLowerCase());

      obj[toChangeKeyName as keyof T] = obj[keyName];
      delete obj[keyName];
    }
  });
};
