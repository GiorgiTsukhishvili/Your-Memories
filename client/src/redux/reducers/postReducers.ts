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
      return state;
    default:
      return state;
  }
};

export default postReducer;
