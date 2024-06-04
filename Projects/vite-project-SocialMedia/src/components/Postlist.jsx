import React, { useState } from "react";
import Post from "./Post";
import Welcomemsg from "./Welcomemsg";
import Pagination from "./Pagination";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList = useLoaderData();
  const [currPage, setCurrPage] = useState(1);
  const [postperpage, setPostPerPage] = useState(6);

  const indexofLastPage = currPage * postperpage;
  const indexofFirstPage = indexofLastPage - postperpage;
  const currentPosts = postList.slice(indexofFirstPage, indexofLastPage);

  const paginate = (pageNumber) => {
    if (
      pageNumber > 0 &&
      pageNumber <= Math.ceil(postList.length / postperpage)
    ) {
      setCurrPage(pageNumber);
    }
  };
  return (
    <>
      <div className="h-full flex flex-col justify-between">
        {postList.length === 0 && <Welcomemsg />}

        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:mt-8">
          {currentPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
        <Pagination
          postPerPage={postperpage}
          totalPosts={postList.length}
          paginate={paginate}
          currPage={currPage}
        />
      </div>
    </>
  );
};

export const PostLoader = async () => {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();
  return data.posts;
};

export default PostList;
