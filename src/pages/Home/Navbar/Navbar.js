import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 h-24 border-b-4 border-base">
      <div className="flex-1">
        <p className="btn btn-ghost normal-case lg:text-4xl text-2xl font-bold">
          Wisdom Portal
        </p>
      </div>
      <div className="flex-none mr-2 hidden lg:block">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#questionAnswer" className="text-xl font-semibold">blog</a>
          </li>
        </ul>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="rounded-full">
              <img
                src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80"
                alt="user"
              />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
