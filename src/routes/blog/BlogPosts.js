import React from "react";
import { Link } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

const BlogPosts = ({ blogPost }) => {
  const potongKalimat = (kalimat) => {
    return kalimat.split(" ").slice(0, 20).join(" ") + "...";
  };

  const formattedDate = new Date(blogPost.createdAt).toLocaleDateString(
    "en-GB",
    {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    }
  );

  return (
    <section className="blog-grid-item">
      {/* <img
        src={blogPost.img}
        alt={blogPost.name}
      />
      <section className="credentials">
        <p>{blogPost.date}</p>
        <p>by {blogPost.author}</p>
      </section>
      <Link
        onClick={ResetLocation}
        to={`/blog/${blogPost.name.toLowerCase().replaceAll(' ', '-')}`}
      >
        <h3>{blogPost.name}</h3>
      </Link>
      <p className="intro">{blogPost.intro}</p> */}

      {/* BARU */}

      <img src={blogPost.image} alt={blogPost.judul} />
      <section className="credentials">
        <p>{formattedDate}</p>
        <p>by {blogPost.penulis}</p>
      </section>
      <Link
        onClick={ResetLocation}
        to={`/blog/${blogPost.judul.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '').replaceAll(" ", "-")}`}
      >
        <h3>{blogPost.judul}</h3>
      </Link>
      <p className="intro">
        <div
          dangerouslySetInnerHTML={{ __html: potongKalimat(blogPost.body) }}
        />
        {}
      </p>
    </section>
  );
};

export default BlogPosts;
