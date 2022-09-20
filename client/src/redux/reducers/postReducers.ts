import { PostActionsProps } from "../../interfaces/postActionsInterface";
import { PostReducerAction } from "../../interfaces/postReducerInterface";

const postReducer = (
  state: PostActionsProps[] = [],
  action: PostReducerAction
) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default postReducer;
