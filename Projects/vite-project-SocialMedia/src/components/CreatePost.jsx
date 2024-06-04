import { Form, redirect } from "react-router-dom";

function CreatePost() {
  //const { addPost } = useContext(PostList);

  return (
    <div className="my-10 px-8 pt-6 flex justify-center items-center">
      <Form
        className="w-[50%] p-10 bg-slate-100 rounded-lg shadow-lg max-md:p-4 max-md:w-full flex flex-col"
        method="POST"
      >
        <div className="mb-2">
          <label
            className="text-gray-700 text-sm font-semibold mb-1"
            htmlFor="userId"
          >
            User Id
          </label>
          <input
            name="userId"
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
            name="title"
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
            name="body"
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
            name="tags"
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
            name="reactions"
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
      </Form>
    </div>
  );
}

export async function formsubmit(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  // postData.reactions = parseInt(reactions.current.value, 10);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });

  return redirect("/");
}

export default CreatePost;
