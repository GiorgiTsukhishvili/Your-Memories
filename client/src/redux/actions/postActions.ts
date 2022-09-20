import { PostActionsProps } from "../../interfaces/postActionsInterface";

export const postActionAll = (payload: PostActionsProps[]) => {
  return {
    type: "FETCH_ALL",
    payload,
  };
};

export const postActionCreate = (payload: PostActionsProps) => {
  return {
    type: "CREATE",
    payload: [payload],
  };
};
