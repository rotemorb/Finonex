const express = require("express");
const axios = require("axios");

// function to get the data from the API
async function getPhotos(req, res) {
  let responsePhoto = await axios(
    `https://jsonplaceholder.typicode.com/photos`
  );
  res.send(responsePhoto.data);
}

async function getPhotosById(req, res) {
  let responsePhoto = await axios(
    `https://jsonplaceholder.typicode.com/photos/${req.params.id}`
  );
  res.send(responsePhoto.data);
}

module.exports = { getPhotos, getPhotosById };
