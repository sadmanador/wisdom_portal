import React from "react";
import { BsBookmark } from "react-icons/bs";

const Blog = ({ blog, handleReadTime, handleMarkAsRead }) => {
  const { title, blog_img, author_info, tags, duration } = blog;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl my-10">
        <figure>
          <img src={blog_img} alt="blog_pic" />
        </figure>
        <div className="card-body">
          <div className="lg:flex lg:justify-between">
            <div className="flex justify-between lg:justify-normal gap-6">
              <div className="avatar">
                <div className="w-12">
                  <img
                    className="rounded-full"
                    src={author_info.image}
                    alt=""
                  />
                </div>
              </div>
              <div className="my-auto">
                <h3 className="font-bold text-lg">{author_info.name}</h3>
                <p className="font-semibold text-gray-500">
                  {author_info.published}
                </p>
              </div>
            </div>
            <div className="lg:my-auto text-lg text-gray-400 font-semibold my-2 text-center">
              <span className="my-auto">{duration} min read</span>
              <button onClick={() => handleReadTime(duration)} className="">
                <BsBookmark className="inline ml-2 hover:text-blue-400 text-2xl" />
              </button>
            </div>
          </div>
          <div className="card-title lg:text-3xl text-xl font-bold lg:my-5">{title}</div>
          <p className="font-semibold text-gray-400 my-5">
            {tags.map((tag) => tag).join(" ")}
          </p>
          <button
            className="text-start underline text-blue-600 font-semibold text-xl"
            onClick={() => handleMarkAsRead(blog)}
          >
            Mark as read
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
