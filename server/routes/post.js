const express = require("express");
const axios = require("axios");
// function to get the data from the API
let getPosts = async () => {
  let response = await axios(`https://jsonplaceholder.typicode.com/posts`);
  console.log(response.data);
  return response;
};

//controller function
module.exports = async (req, res) => {
  let responseFact = await getPosts();
  res.send(responseFact.data);
};
