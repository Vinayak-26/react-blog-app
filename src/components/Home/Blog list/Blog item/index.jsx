import React from "react";
import './styles.css';
import Chip from "../../../Common/Chip";
import { Link } from "react-router-dom";

function BlogItem({blog:{
    id, 
    description, 
    title,
    cover,
    createdAt,
    category
},
}){
    return(
        <div className="blogItem-wrap">
                <img src={cover}  alt="cover"/>
                <Chip label={category} />
                <h3>{title}</h3>
                <p className="blogItem-desc">{description}</p>
                <h6>{createdAt}</h6>
                <footer>                   
                    <Link className="blogItem-link" to={`/blog/${id}`}>→</Link>
                </footer>
        </div>
    );
}
export default BlogItem;