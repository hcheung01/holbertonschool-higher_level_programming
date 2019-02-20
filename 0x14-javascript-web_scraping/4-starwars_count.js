#!/usr/bin/node
const request = require('request');
const f = 'http://swapi.co/api/films/';
request(f, function (error, response, body) {
  const results = JSON.parse(body).results;
  let ct = 0;
  for (let i = 0; i < results.length; i++) {
    let characters = results[i].characters;
    for (let j = 0; j < characters.length; j++) {
      if (characters[j].includes('18')) {
        ct += 1;
      }
    }
  }
  console.log(ct || error);
});
