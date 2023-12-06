// Create web server
// This is a very simple web server. It responds to every request with the same
// HTML file. It does not support any type of dynamic content.
//
// To run it:
//    node comments.js
//
// To use it:
//    http://localhost:8080/
//
// Written by Prof. David M. Krumme, for CS 336, Calvin College
// Version 0.1, Oct 12, 2016
// Version 0.2, Oct 15, 2016
// Version 0.3, Oct 17, 2016
// Version 0.4, Oct 20, 2016
// Version 0.5, Oct 21, 2016
// Version 0.6, Oct 22, 2016
// Version 0.7, Oct 27, 2016
// Version 0.8, Oct 28, 2016
// Version 0.9, Nov  4, 2016
// Version 1.0, Nov  5, 2016

// Import the express module
const express = require('express')

// Create a new web server
const app = express()

// Configure the web server with directory name __dirname for finding HTML
app.use(express.static(__dirname))

// Create a route for the path /
app.get('/', function (req, res) {
  res.sendfile('comments.html')
})

// Create a route for the path /comments
app.get('/comments', function (req, res) {
  res.send('You sent the URL ' + req.url)
})

// Create a route for the path /comments/1
app.get('/comments/1', function (req, res) {
  res.send('You sent the URL ' + req.url)
})

// Create a route for the path /comments/2
app.get('/comments/2', function (req, res) {
  res.send('You sent the URL ' + req.url)
})

// Create a route for the path /comments/3
app.get('/comments/3', function (req, res) {
  res.send('You sent the URL ' + req.url)
})

// Create a route for the path /comments/4
app.get('/comments/4', function (req, res) {
  res.send('You sent the URL ' + req.url