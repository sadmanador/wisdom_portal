import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Blog from "../../Blog/Blog";

const Main = () => {
  const [blogs, setBlogs] = useState([]);
  const [takenTime, setTakenTime] = useState(0);
  const [selectedBlogs, setSelectedBlogs] = useState([]);

  //loading data
  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleMarkAsRead = (blog) => {
    if (selectedBlogs.find((blg) => blg._id === blog._id)) {
      toast.error("You Have Already Bookmarked This Blog");
      return;
    }
    const storedBlog = [...selectedBlogs, blog];
    setSelectedBlogs(storedBlog);
  };

  const handleReadTime = (time) => {
    setTakenTime(takenTime + time);
  };

  return (
    <div className="lg:grid grid-cols-16 gap-10">
      <div className="">
        {blogs.map((blog) => (
          <Blog
            key={blog._id}
            blog={blog}
            handleMarkAsRead={handleMarkAsRead}
            handleReadTime={handleReadTime}
          ></Blog>
        ))}
      </div>
      <div className="mt-10 lg:w-96 justify-self-end">
        <div className="lg:sticky lg:top-6">
          <div className="border-2 border-indigo-500 rounded-xl lg:px-10 lg:py-10 p-3 bg-indigo-100 mb-5">
            <p className="lg:text-2xl text-xl font-semibold text-indigo-700">
              Spent time on read: {takenTime}mins
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl lg:px-10 lg:py-10 p-2 mb-10">
            <p className="lg:text-2xl text-xl font-semibold">
              Bookmarked Blogs: {selectedBlogs?.length}
            </p>
            {selectedBlogs.map((b) => (
              <p
                className="my-6 px-3 py-4 bg-white rounded-lg font-semibold text-lg break-words"
                key={b._id}
              >
                {b.title}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
