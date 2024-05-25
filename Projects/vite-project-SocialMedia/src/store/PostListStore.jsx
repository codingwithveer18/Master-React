import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchpostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchpostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchpostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <div>
      <PostList.Provider value={{ postList, addPost, deletePost }}>
        {children}
      </PostList.Provider>
    </div>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Delhi",
    body: "Hi Friends, I am going to Delhi",
    reactions: 2,
    userId: "user-1",
    tags: ["vacation", "delhi", "Enjoying"],
  },
  {
    id: "2",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai",
    reactions: 4,
    userId: "user-2",
    tags: ["vacation", "mumbai", "work"],
  },
  {
    id: "3",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai",
    reactions: 4,
    userId: "user-2",
    tags: ["vacation", "mumbai", "work"],
  },
  {
    id: "4",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai",
    reactions: 4,
    userId: "user-2",
    tags: ["vacation", "mumbai", "work"],
  },
  {
    id: "5",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai",
    reactions: 4,
    userId: "user-2",
    tags: ["vacation", "mumbai", "work"],
  },
];

export default PostListProvider;
