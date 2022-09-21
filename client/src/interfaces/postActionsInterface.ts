export interface PostActionsProps {
  title: string;
  message: string;
  creator: string;
  tags: string | string[];
  selectedFile: string;
  likeCount?: number;
  createdAt?: Date;
  _id?: string;
}
