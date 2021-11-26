const express = require('express');
const path = require('path');
const request = require('request');
const rp = require('request-promise');
const SpotifyWebApi = require('spotify-web-api-node');


exports.createQuery = function(song, artist) {
    var queryString;

    if (song === "" && artist === "")  {
        alert("Please enter a song and/or artist");
        return;
    }
    else if (song === "" && artist !== "") {
        queryString = "artist: " + artist;
    }
    else if (artist === "" && song !== "") {
        queryString = "track: " + song;
    }
    else {
        queryString = "track: " + song + " artist: " + artist;
    }
    
    return queryString;
}

exports.querySongAPI = function (queryString, spotifyApi) {
    console.log(queryString);

    

}


exports.authorizeAccess = function () {
    var token;
    const clientID = '338b48faea544146bda3e79eb5b799ed';
    const clientSecret = '';
    var spotifyApi;

    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Authorization': 'Basic ' + (clientID + ':' + clientSecret).toString('base64')
        },
        form: {
            grant_type: 'client_credentials'
        },
        json: true
    };
      
    rp.post(authOptions, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            token = body.access_token;  
        }
        else {
            console.warn(error)
        }
    }).then(function (res) {
        spotifyApi = new SpotifyWebApi({
            clientId: clientID,
            clientSecret: clientSecret,
            redirectUri: 'http://localhost:3000/callback'
        });

        spotifyApi.setAccessToken(token);
            
    });

    return spotifyApi;
}




