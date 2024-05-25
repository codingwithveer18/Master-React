import { useContext, useRef } from "react";
import { PostList } from "../store/PostListStore";

function CreatePost() {
  const userIdele = useRef();
  const postTitleele = useRef();
  const postBodyele = useRef();
  const reactionsele = useRef();
  const tagsele = useRef();
  const { addPost } = useContext(PostList);

  const handlesubmit = (event) => {
    event.preventDefault();
    const userId = userIdele.current.value;
    const postTitle = postTitleele.current.value;
    const postBody = postBodyele.current.value;
    const reactions = reactionsele.current.value;
    const tags = tagsele.current.value.split(" ");
    addPost(userId, postTitle, postBody, reactions, tags);
    userIdele.current.value = "";
    postTitleele.current.value = "";
    postBodyele.current.value = "";
    reactionsele.current.value = "";
    tagsele.current.value = "";
  };
  return (
    <div className="my-10 px-8 pt-6 flex justify-center items-center">
      <form
        className="w-[50%] p-10 bg-slate-100 rounded-lg shadow-lg max-md:p-4 max-md:w-full flex flex-col"
        onSubmit={handlesubmit}
      >
        <div className="mb-2">
          <label
            className="text-gray-700 text-sm font-semibold mb-1"
            htmlFor="userId"
          >
            User Id
          </label>
          <input
            ref={userIdele}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-blue-800 mb-1"
            id="userId"
            type="text"
            placeholder="User ID"
            required
          />
        </div>
        <div className="mb-2">
          <label
            className="text-gray-700 text-sm font-semibold mb-1"
            htmlFor="title"
          >
            Post Title
          </label>
          <input
            ref={postTitleele}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-blue-800 mb-1"
            id="title"
            type="text"
            placeholder="Post Title"
            required
          />
        </div>
        <div className="mb-2">
          <label
            className="text-gray-700 text-sm font-semibold mb-1"
            htmlFor="body"
          >
            Description
          </label>
          <textarea
            ref={postBodyele}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-blue-800 mb-1 resize-none"
            rows={3}
            id="body"
            type="text"
            placeholder="Description"
            required
          />
        </div>
        <div className="mb-2">
          <label
            className="text-gray-700 text-sm font-semibold mb-1"
            htmlFor="tags"
          >
            Post Tags
          </label>
          <input
            ref={tagsele}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-blue-800 mb-1"
            id="tags"
            type="text"
            placeholder="Post Tags"
            required
          />
        </div>
        <div className="mb-2">
          <label
            className="text-gray-700 text-sm font-semibold mb-1"
            htmlFor="reactions"
          >
            Reactions
          </label>
          <input
            ref={reactionsele}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-blue-800 mb-1"
            id="reactions"
            type="text"
            placeholder="Post Reactions"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
