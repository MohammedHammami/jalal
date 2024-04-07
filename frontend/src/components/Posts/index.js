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
        .get(`http://jalal.store:5000/posts/categories/3`)
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
    <div>
        <div style={{ backgroundColor: 'rgba(148, 209, 245, 0.9)', color: 'white', textAlign: 'center', padding: '10px' ,marginBottom:"10px",marginTop:"10px",fontSize:"40px"}}>jalal</div>

    <div className="categories-container">
       {state.posts.map((posts) => (
         <div key={posts.postsid} className="category-item" >
            <div>
            </div>
           <div className="category-name">{posts.ProductName}</div>
           <div className="category-description">{posts.Description}</div>
         </div>
       ))}
     </div>
       </div>
  );
};
export default Posts;
