import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div
      className="text-2xl font-extrabold text-blue-600 tracking-tight"
      style={{ width }}
    >
      YourBlog
    </div>
  );
}

export default Logo;
