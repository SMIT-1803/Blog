import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="block group">
      <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition transform group-hover:-translate-y-1">
        <div className="w-full h-48 bg-gray-100 overflow-hidden">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
