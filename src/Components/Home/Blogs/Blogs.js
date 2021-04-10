import React from "react";
import img1 from "../../../images/Ellipse 1.png";
import img2 from "../../../images/Ellipse 2.png";
import img3 from "../../../images/Ellipse 3.png";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const blogs = [
    {
      img: img1,
      name: "Rashed Kabir",
      date: "22 Aug 2020",
      title: "check at least a doctor in a years for your teeth",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, deleniti nostrum debitis voluptatum alias distinctio!",
    },
    {
      img: img2,
      name: "Dr. Caudi",
      date: "22 Aug 2020",
      title: "2 times of brush in a day can keep ou heathy",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, deleniti nostrum debitis voluptatum alias distinctio!",
    },
    {
      img: img3,
      name: "Dr. John Mitchel",
      date: "22 Aug 2020",
      title: "The tooth cancer is taking a challenge",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, deleniti nostrum debitis voluptatum alias distinctio!",
    },
  ];
  return (
    <section className="blog py-5">
      <div className="container ">
        <div className="text-center">
          <h5 className=" text-info">OUR BLOG</h5>
          <h2>From Our Blog News</h2>
        </div>
        <div className="row">
          {blogs.map((blogCard) => (
            <BlogCard blogCard={blogCard}></BlogCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
