import React, { useEffect, useState } from "react";
import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/Search bar";
import BlogList from "../../components/Home/Blog list";
import { blogList } from "../../config/data";
import EmptyList from "../../components/Common/Empty list";
import "../../components/Home/Preload/styles.css";

function Home() {
  const[blogs, setBlogs] = useState(blogList);
  const[searchKey, setSearchKey] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });

  const handleSearchSubmit= (e) =>{
    e.preventDefault();
    handleSearchResults();
  }
//search for blogs by category
  const handleSearchResults= () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter(blog=>
    blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()));
    setBlogs(filteredBlogs);
  }

  const handleClearSearch = () =>{
    setBlogs(blogList);
    setSearchKey('');
  }
      return(
       <div>
          {/* preload image placement */}
          {/* {isLoading ? 
          (<div className={`image-preload ${isLoading ? 'loading' : 'loaded'}`}> 
              <img src="/assets/images/first_one.jpg" alt="uh ooh !" />
          </div>) : */}
          {/* ( */}
          <div> 
          {/* Page heading */}
          {/* Still under development 
            <div className='image-preload loaded'> 
              <img src="/assets/images/first_one.jpg" alt="uh ooh !" />
          </div> */}
           <Header/>

          {/* search bar */}
          <SearchBar 
          value={searchKey} 
          clearSearch={handleClearSearch}
          formSubmit={handleSearchSubmit}
          handleSearchKey={(e) => setSearchKey(e.target.value)} />
         
          {/* blog list and empty list */}
          {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs}/>}
          </div>
          {/* )} */}
         </div>
         
       
    );
}
export default Home;