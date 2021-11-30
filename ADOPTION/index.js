const { application } = require('express');
const http = require('http');
const port = process.env.PORT || 3000
const express = require("express");

const path = require("path");

const app = express();

const server = http.createServer(function (req, res) {
  req.on('data', function (data) {
    //handle data as it is received... for POST requests
  });
  req.on('end', function () {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, 'OK');

    res.end('{ "data": "just a plain old json reply" }');
  });
});

app.listen(3000, () => console.log('server is popping'))
