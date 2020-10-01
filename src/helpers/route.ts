import Router from "next/router";

export const route = (url: string) => {
  return Router.push(url, undefined, { shallow: true });
};
