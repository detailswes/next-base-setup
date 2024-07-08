import cookie from "js-cookie";

export const removeSession = () => {
  cookie.remove("token");
};

export const setSession = () => {
  cookie.remove("token");
};

export const getSession = () => {
  return { token: cookie.get("token") };
};
