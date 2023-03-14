import React from "react";
import { Link } from "react-router-dom";

const LeftBar = () => {
  return (
    <div>
      <div className="sidebar">
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="main-menu menu-active" id="lws-alljobs-menu">
                <i className="fa-solid fa-briefcase"></i>
                <span> All Available Jobs</span>
              </Link>
              <ul className="space-y-6 lg:space-y-2 ">
                <li>
                  <a
                    className="sub-menu"
                    href="/"
                    id="lws-internship-menu"
                  >
                    <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                    Internship
                  </a>
                </li>
                <li>
                  <a
                    className="sub-menu"
                    href="/"
                    id="lws-fulltime-menu"
                  >
                    <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                    Full Time
                  </a>
                </li>
                <li>
                  <a className="sub-menu" href="/" id="lws-remote-menu">
                    <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                    Remote
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/addJobs" className="main-menu" id="lws-addJob-menu">
                <i className="fa-solid fa-file-circle-plus"></i>
                <span>Add NewJob</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default LeftBar;
