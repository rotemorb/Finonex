const express = require("express");
const axios = require("axios");

// function to get the data from the API
let getPosts = async () => {
  let response = await axios(`https://jsonplaceholder.typicode.com/posts`);
  return response;
};

//controller function
module.exports = async (req, res) => {
  let responsePost = await getPosts();
  res.send(responsePost.data);
};
