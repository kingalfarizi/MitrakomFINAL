import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactPaginate from "react-paginate";
//data
import allBlogPosts from "../../data/allBlogPosts";
//components
import ScrollBtn from "../../helpers/ScrollBtn";
import ResetLocation from "../../helpers/ResetLocation";
import BlogPosts from "./BlogPosts";
import { useQuery } from "@tanstack/react-query";

const fetchBlog = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`);
  const data = await response.json();
  return data;
};

const Blog = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["blog"],
    queryFn: fetchBlog,
    refetchIntervalInBackground: 1000,
  });

  const [allBlogPosts, setAllBlogPosts] = useState([]);

  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(itemOffset + 6);
  const [currentBlogPosts, setcurrentBlogPosts] = useState(
    [...allBlogPosts].reverse().slice(itemOffset, endOffset)
  );
  const [pageCountPosts, setpageCountPosts] = useState(
    Math.ceil(allBlogPosts.length / 6)
  );

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 6) % allBlogPosts.length;
    setItemOffset(newOffset);
    ResetLocation();
  };

  useEffect(() => {
    if (data) {
      // console.log(data)
      const updatedAllProducts = data.data.map((product) => ({
        ...product,
        attributes: [], // Jika 'attributes' null, ganti dengan array kosong
      }));
      // console.log(updatedAllProducts)
      setEndOffset(itemOffset + 6);

      setAllBlogPosts(updatedAllProducts);
      setcurrentBlogPosts(
        [...updatedAllProducts].reverse().slice(itemOffset, endOffset)
      );
      setpageCountPosts(Math.ceil(updatedAllProducts.length / 6));
    }
  }, [data, endOffset, itemOffset]);

  useEffect(() => {
    document.title = "Blog Mitrakom";
    // setEndOffset(itemOffset + 6);
    // setcurrentBlogPosts(
    //   [...allBlogPosts].reverse().slice(itemOffset, endOffset)
    // );
    // setpageCountPosts(Math.ceil(allBlogPosts.length / 6));
  }, [setEndOffset, endOffset, itemOffset]);
  return (
    <motion.main
      className="blog"
      initial={{ opacity: 0, translateX: -300 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: -300 }}
      transition={{ duration: 1 }}
    >
      <h2>Blog</h2>
      <p className="blog-intro">Informasi kemajuan teknologi paling update!</p>
      <section className="blog-grid">
        {currentBlogPosts.map((blogPost, index) => {
          return <BlogPosts key={index} blogPost={blogPost} />;
        })}
      </section>
      <ReactPaginate
        className="pagination blog-pagination"
        breakLabel="..."
        nextLabel=" &#62;"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCountPosts}
        previousLabel="&#60;"
        renderOnZeroPageCount={null}
      />
      <ScrollBtn />
    </motion.main>
  );
};
export default Blog;
