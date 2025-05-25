import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../index";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-6">
          <div className="w-full lg:w-5/12 px-6 mb-8 lg:mb-0">
            <Logo width="100px" />
            <p className="mt-4 text-sm">
              &copy; 2023. All rights reserved by DevUI.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
