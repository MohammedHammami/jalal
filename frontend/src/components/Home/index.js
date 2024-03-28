import React, { useRef } from "react";
import axios from "axios";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import posts, { setPost } from "../Redux/reducers/posts";
import { setuserpostId } from "../Redux/reducers/comment";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import ReactPlayer from 'react-player'
const Home = () => {
  const [page, setPage] = useState(1);
  const [browse, setBrowse] = useState(false);
  const [limit, setLimit] = useState(6);
  const [nameCraft, setNameCraft] = useState("")

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const state = useSelector((state) => {
    console.log(state);
    return {
      posts: state.post.posts,
      mood: state.Mood.mood,
      totalPages: state.post.totalPages,
      currentPage: state.post.currentPage,
      language: state.auth.language
    };
  });
  const getAllPosts = (page, limit) => {
    
    axios
      .get(`http://localhost:5000/posts?page=${page}&limit=${limit}`)
      .then((res) => {
          
          dispatch(setPost(res.data.posts));

      })
      .catch((err) => {
        console.log(err);
      });
  };



  return (
    <>
    </>
  );
};
export default Home;
