import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import ResetLocation from '../../helpers/ResetLocation'
import blogPreview from '../../data/blogPreview';


export default class BlogPreview extends React.Component {
  render() {
    return (
      <motion.div className="section-9 flex-container flex-column"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >

        <h2 className="txt-center pop-font txt-white">Terbaru dari blog</h2>
        <p className="section-description">
         Seputar informasi tentang dunia teknologi dan perkembangan elektronik.
        </p>
        <section className="blog-posts-landing">
          {blogPreview.map((post) => (
            <section
              key={post.id}
              className="post flex-container flex-column"
            >
              <img
                src={post.img}
                // srcSet={`${post.img700} 400w, ${post.img375} 375w`}
                // sizes="(min-width: 700px) 700px, 375px"
                alt={post.name}
              />
              <Link onClick={ResetLocation} to={`/blog/${post.name.toLowerCase().replaceAll(' ', '-')}`}>
                <h3 className="pop-font txt-white">{post.name}</h3>
              </Link>
              <p className="intro">{post.intro}</p>
            </section>
          ))}
        </section>

        <Link
          onClick={ResetLocation}
          to="/blog"
          className="active-button-style txt-white"
        >
          Post Lainnya
        </Link>
      </motion.div>

    )
  }
}
