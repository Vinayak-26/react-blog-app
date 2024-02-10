import React, { useEffect, useState } from "react"; 
import { useParams, Link } from "react-router-dom";
import { blogList } from "../../config/data.js";
import './styles.css';
import Chip from "../../components/Common/Chip"; 
import EmptyList from "../../components/Common/Empty list";

function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let selectedBlog = blogList.find((blog) => blog.id === parseInt(id));
    if (selectedBlog) {
      setBlog(selectedBlog);
    }
  }, []); 

  return (
    <div>
      {blog ? (
        <div className="blog-wrap">
          <header>
            <p className="blog-date">Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            {/* <div className="blog-subCategory">
              {blog.subCategory.map((category, index) => (
                <div key={index}>
                  <Chip label={category} /> 
                </div>
              ))}
            </div> */}
          </header>
          <img src={blog.cover} alt="cover" />  
          <p className="blog-desc">{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
      <Link to='/' className="blog-goBack">
        Go Back
      </Link>
    </div>
  );
}

export default Blog;
