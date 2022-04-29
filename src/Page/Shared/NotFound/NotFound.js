import React from "react";
import { Link } from "react-router-dom";
import cover1 from "../../../img/cover/notFound.png";

const NotFound = () => {
  return (
    <div>
      <div className="h-screen w-screen bg-gray-100 flex items-center ">
        <div className="container flex flex-col lg:flex-row items-center justify-center px-2 text-gray-700">
          <div className="max-w-md">
            <div className="text-5xl font-dark font-bold">404</div>
            <p className="text-2xl md:text-3xl font-light leading-normal">
              Sorry we couldn't find this page.{" "}
            </p>
            <p className="mb-8">
              But dont worry, you can find plenty of other things on homepage.
            </p>

            <Link
              to="/"
              className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700"
            >
              back to homepage
            </Link>
          </div>
          <div className="max-w-lg ">
            <img src={cover1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
