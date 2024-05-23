import React, { useContext } from "react";
import { PostList as PostListData } from "../store/PostListStore";
import Post from "./Post";

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:mt-8">
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostList;
