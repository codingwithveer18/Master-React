const posts = [
  {
    id: 1,
    title: "Vite-Project-01 (Bharat Clock)",
    href: "#",
    description:
      "Created a Clock in Vite+React & Tailwind CSS with functionalities like useEffect, etc",
    date: "Mar 16, 2020",
    datetime: "2024-03-16",
    image:
      "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://github.com/codingwithveer18/Master-React/tree/main/Projects/vite-project-Bharat-Clock",
  },
  {
    id: 2,
    title: "Vite-Project-02 (Todo App)",
    href: "#",
    description:
      "Created a Todo app in Vite+React & Tailwind CSS with functionalities like useEffect,useRef, etc",
    date: "Apr 16, 2024",
    datetime: "2024-03-24",
    image:
      "https://plus.unsplash.com/premium_photo-1683262038148-2ac280407276?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://github.com/codingwithveer18/Master-React/tree/main/Projects/vite-project-todo-app",
  },
  {
    id: 3,
    title: "Vite-Project-03 (Calculator)",
    href: "#",
    description:
      "Created a Calculator in Vite+React & Tailwind CSS with functionalities like useEffect,useRef, etc",
    date: "Apr 16, 2024",
    datetime: "2024-04-13",
    image:
      "https://plus.unsplash.com/premium_photo-1683262038148-2ac280407276?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://github.com/codingwithveer18/Master-React/tree/main/Projects/vite-project-calculator",
  },
  {
    id: 4,
    title: "Vite-Project-04 (Social Media)",
    href: "#",
    description:
      "Created a Social Media in Vite+React & Tailwind CSS with functionalities like useEffect,useRef,useReducer,useCallBack etc",
    date: "Apr 16, 2024",
    datetime: "2024-05-10",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://github.com/codingwithveer18/Master-React/tree/main/Projects/vite-project-SocialMedia",
  },
  {
    id: 5,
    title: "Vite-Project-04 (Using Redux Toolkit)",
    href: "#",
    description:
      "Created a small demo project in Vite+React about the functionality of Redux-Toolkit",
    date: "May 16, 2024",
    datetime: "2024-05-20",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://github.com/codingwithveer18/Master-React/tree/main/Projects/vite-project-SocialMedia",
  },
];

export default function App() {
  return (
    <div className="bg-white py-12 sm:py-19">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            My React Projects In Master-React Tutorial
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Documentation :{" "}
            <a
              href="https://fullstack-tutorial.notion.site/React-Tutorial-0034d8c5567c498d95daa191a86a5ac0"
              className="font-semibold underline"
            >
              React-Docs
            </a>
          </p>
        </div>
        <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-8 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
              </div>
              <div className="group relative">
                <h3 className="my-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.url} className="mt-3">
                    {post.title}
                  </a>
                </h3>
                <div className="h-64 flex justify-center rounded-lg">
                  <img
                    src={post.image}
                    alt="Image"
                    className="object-fill rounded-lg"
                  />
                </div>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
