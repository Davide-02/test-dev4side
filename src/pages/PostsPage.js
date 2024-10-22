import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Card, Row, Col } from "react-bootstrap";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <h2 className="mb-4">Post</h2>
        <Row>
          {posts.map((post) => (
            <Col key={post.id} md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Autore ID: {post.userId}
                  </Card.Subtitle>
                  <Card.Text>{post.body}</Card.Text> 
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default PostsPage;
