import React from "react";
import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Container>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Create New Post
        </h1>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;
