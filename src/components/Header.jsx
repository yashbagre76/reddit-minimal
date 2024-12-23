import React from "react";
import { FaReddit } from "react-icons/fa";

function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 gap-3 mx-8">
        <FaReddit className="text-blue-500 text-4xl hover:text-blue-700 hover:scale-110 transition-transform duration-300" />
        <span className="text-xl font-semibold">
          <span className="text-blue-500">Reddit</span>
          <span className="text-white">Minimal</span>
        </span>
      </div>
      <div className="flex-none gap-3 mx-10">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
