import React, { useRef } from "react";
import axios from "axios";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import {setPost} from "../Redux/reducers/posts"
import { useEffect, useState } from "react";

    const Posts = ()=>{
    const dispatch = useDispatch();

    const state = useSelector((state) => {
        console.log(state.post.posts);
        return {
          posts: state.post.posts, 
          
        };
      });
      
    
    const getPosts = () => {
        axios
        .get(`http://localhost:5000/posts/categories/3`)
        .then((res) => {
        console.log("ssssss");
        dispatch(setPost(res.data.posts));
        })
        .catch((err) => {
        console.log(err);
        });
    };
    useEffect(()=>{
        getPosts()
      },([]))
      

  return (
    <div className="categories-container">
       {state.posts.map((posts) => (
         <div key={posts.postsid} className="category-item" >
            <div>
                <img src={posts.ImagePath}/>
            </div>
           <div className="category-name">{posts.ProductName}</div>
           <div className="category-description">{posts.Description}</div>
         </div>
       ))}
     </div>
  );
};
export default Posts;
