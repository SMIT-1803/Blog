import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Container, Button } from "../components";
import appwriteService from "../appwrite/config";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData && post.userId === userData.$id;

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
        <div className="relative bg-white rounded-xl overflow-hidden shadow mb-8">
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="w-full h-64 object-cover"
          />
          {isAuthor && (
            <div className="absolute top-4 right-4 flex space-x-3">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500">Edit</Button>
              </Link>
              <Button
                bgColor="bg-red-500"
                onClick={() => {
                  appwriteService.deletePost(post.$id).then((ok) => {
                    if (ok) {
                      appwriteService.deleteFile(post.featuredImage);
                      navigate("/");
                    }
                  });
                }}
              >
                Delete
              </Button>
            </div>
          )}
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
        <div className="prose max-w-none text-gray-700">
          {parse(post.content)}
        </div>
      </Container>
    </div>
  );
}
