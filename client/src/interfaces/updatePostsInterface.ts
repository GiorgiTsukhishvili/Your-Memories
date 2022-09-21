export interface UpdatePostsProps {
  post: {
    title: string;
    message: string;
    creator: string;
    tags: string | string[];
    selectedFile: string;
    likeCount?: number;
    createdAt?: Date;
    _id?: string;
  };
  toggle: () => void;
}

export interface UpdatePostState {
  title: string;
  message: string;
  creator: string;
  tags: string | string[];
  selectedFile: string;
  likeCount?: number | undefined;
  createdAt?: Date | undefined;
  _id?: string | undefined;
}
