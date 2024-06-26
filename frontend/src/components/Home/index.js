import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import {setCategories} from "../Redux/reducers/categories"
import { useEffect, useState } from "react";

const Home = () => {
  


  // const [page, setPage] = useState(1);
  // const [browse, setBrowse] = useState(false);
  // const [limit, setLimit] = useState(6);
  // const [nameCraft, setNameCraft] = useState("")

  //********************************************** */
  const navigate = useNavigate();
  //********************************************** */
  const dispatch = useDispatch();
  
  const state = useSelector((state) => {
    console.log(state.categories.categories);
    return {
      categories: state.categories.categories, 
      
    };
  });
  const getAllcategories = () => {
    axios
      .get(`http://jalal.store:5000/categories`)
      .then((res) => {
        dispatch(setCategories(res.data.posts));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(()=>{
    getAllcategories()
  },([]))

  const handleClick = (id) => {
    // هنا يمكنك وضع الدالة التي تريد تنفيذها عند النقر على الكائن
    navigate("/posts/3")
  };

  return (
    <div>

    </div>

  );
};
export default Home;
