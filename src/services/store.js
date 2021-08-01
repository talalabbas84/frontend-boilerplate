const prefix = "1594461923517";

export const Store = {
  // utilities
  set: (name, item) => {
    localStorage.setItem(prefix + name, item);
  },
  get: (name, arg) => {
    return localStorage.getItem(prefix + name) || arg;
  },
  setUserToken: (accessToken) => {
    localStorage.setItem(prefix + "accessToken", accessToken);
  },
  setUserId: (userId) => {
    localStorage.setItem(prefix + "userId", userId);
  },
  setUser: (user) => {
    localStorage.setItem(prefix + "user", user);
  },
  getUserToken: (arg) => {
    return localStorage.getItem(prefix + "accessToken") || arg;
  },
  getUserId: (arg) => {
    return localStorage.getItem(prefix + "userId") || arg;
  },
  getUser: (arg) => {
    return localStorage.getItem(prefix + "user") || arg;
  },
  remove: (key) => {
    return localStorage.removeItem(prefix + key);
  },
  logoutAndReset: () => {
    localStorage.removeItem(prefix + "user");
    localStorage.removeItem(prefix + "userId");
    localStorage.removeItem(prefix + "accessToken");
    localStorage.clear();
  },
};
