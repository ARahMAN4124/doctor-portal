import React from "react";
import "./Blog.css";

const BlogCard = ({ blogCard }) => {
  return (
    <div className="col-md-4  pt-5">
      <div className="p-4  blog-card  border">
        <div className="d-flex">
          <div>
            <img
              src={blogCard.img}
              style={{ width: "70px" }}
              className="img-fluid img mr-3"
              alt=""
            />
          </div>
          <div>
            <p className="m-0">{blogCard.name}</p>
            <small className="text-secondary">{blogCard.date}</small>
          </div>
        </div>
        <div className="card-body p-0">
          <h2 className="py-3">{blogCard.title}</h2>
          <p className="text-secondary description">{blogCard.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
