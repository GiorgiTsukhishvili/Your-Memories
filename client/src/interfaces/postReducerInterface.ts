import { PostActionsProps } from "./postActionsInterface";

export interface PostReducerAction {
  type: string;
  payload: PostActionsProps[];
}
