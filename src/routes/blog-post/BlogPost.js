import { useEffect, useState } from "react";
import allBlogPosts from "../../data/allBlogPosts";
import { useQuery } from "@tanstack/react-query";

const fetchBlog = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`);
  const data = await response.json();
  return data;
};
const BlogPost = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["blog"],
    queryFn: fetchBlog,
    refetchIntervalInBackground: 1000,
  });
  const [blogPost, setBlogPost] = useState({});
  
  useEffect(() => {
    // setBlogPost(
    //   allBlogPosts.filter(
    //     (post) =>
    //       post.name.toLowerCase() ===
    //       window.location.pathname.toString().substring(6).replaceAll("-", " ")
    //   )[0]
    // );
    if (data) {
      const blogPost = data.data.filter(
        (post) =>
          post.judul.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "") ===
          window.location.pathname.toString().substring(6).replaceAll("-", " ")
      )[0];
      setBlogPost(blogPost);
    }
  }, [data]);
  useEffect(() => {
    document.title = `${blogPost.judul} | Mitrakom`;
  }, [blogPost.judul]);
  return (
    <main className="blog-post">
      <img src={blogPost.image} alt="" aria-hidden="true" />
      <section>
        <h2>{blogPost.judul}</h2>
        <p>
          {/* {blogPost.content} */}
          <div dangerouslySetInnerHTML={{ __html: blogPost.body }} />
        </p>
      </section>
    </main>
  );
};

export default BlogPost;
