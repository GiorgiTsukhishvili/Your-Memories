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
    case "UPDATE":
      return state.map((item) =>
        item._id === action.payload[0]._id
          ? { ...item, likeCount: item.likeCount! + 1 }
          : item
      );
    case "DELETE":
      return state.filter((item) => item._id !== action.payload[0]._id);
    default:
      return state;
  }
};

export default postReducer;
