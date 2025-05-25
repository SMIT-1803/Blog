import React, { useState, useEffect } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!slug) return navigate("/");
    appwriteService.getPost(slug).then((data) => {
      if (data) setPost(data);
      else navigate("/");
    });
  }, [slug, navigate]);

  if (!post) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Container>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Post</h1>
        <PostForm post={post} />
      </Container>
    </div>
  );
}

export default EditPost;
