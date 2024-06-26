import React, { useState, useEffect } from "react";
import axios from "axios";

const PostList = () => {
   const [posts, setPosts] = useState({});

   const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4000/posts');

    setPosts(res.data);
   };

   useEffect(() => {
    fetchPosts();
   }, []); //empty array tells react to run function one time when page intially loads

   console.log(posts);
   return <div/>

};

export default PostList;