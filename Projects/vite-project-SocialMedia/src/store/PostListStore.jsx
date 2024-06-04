import {
  createContext,
  useCallback,
  useReducer,
} from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  loading: false,
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "FETCH_POST") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchpostList] = useReducer(postListReducer, []);
  const addPost = (post) => {
    dispatchpostList({
      type: "ADD_POST",
      payload: post,
    });
  };
  const Fetchpost = (posts) => {
    dispatchpostList({
      type: "FETCH_POST",
      payload: { posts },
    });
  };
  const deletePost = useCallback(
    (postId) => {
      dispatchpostList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    },
    [dispatchpostList]
  );

  return (
    <div>
      <PostList.Provider value={{ postList, addPost, deletePost }}>
        {children}
      </PostList.Provider>
    </div>
  );
};

export default PostListProvider;
