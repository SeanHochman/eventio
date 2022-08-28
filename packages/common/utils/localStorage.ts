export const setLocalStorage = (key: string, val: string) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(key, val);
  }
  return null;
};

export const getLocalStorage = (key: string) => {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem(key);
  }
  return null;
};

export const removeLocalStorage = (key: string) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(key);
  }
  return null;
};

export const clearLocalStorage = () => {
  if (typeof localStorage !== 'undefined') {
    localStorage.clear();
  }
  return null;
};
