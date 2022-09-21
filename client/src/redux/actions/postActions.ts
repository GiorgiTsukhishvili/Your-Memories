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

export const postActionUpdate = (payload: PostActionsProps) => {
  return {
    type: "UPDATE",
    payload: [payload],
  };
};

export const deleteActionPost = (payload: PostActionsProps) => {
  return {
    type: "DELETE",
    payload: [payload],
  };
};

export const updateWholeAction = (payload: PostActionsProps) => {
  return {
    type: "UPDATE_WHOLE",
    payload: [payload],
  };
};
