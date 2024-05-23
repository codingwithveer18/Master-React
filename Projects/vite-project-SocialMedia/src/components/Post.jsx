import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/PostListStore";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="bg-white px-4 flex items-center justify-center">
      <div className="m-6 border-2 rounded-lg ">
        <div className="flex flex-col mt-2  border-black relative ">
          <div>
            <h3 className="text-xl text-gray-800 px-2 font-medium">
              {post.title}
            </h3>
            <button
              className="absolute -right-2 -top-4 font-base bg-red-600 text-white p-2 rounded-full"
              onClick={() => deletePost(post.id)}
            >
              <MdDelete />
            </button>

            <p className="my-1 text-sm text-gray-600 p-2">{post.body}</p>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-white bg-blue-500 rounded-md px-1.5 py-0.5  mx-2"
              >
                {tag}
              </span>
            ))}
          </div>

          <button className=" bg-green-200 hover:bg-green-300 text-black font-base py-2 px-4 rounded m-4 flex items-center justify-center ">
            This post has been reacted by {post.reactions} people
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
