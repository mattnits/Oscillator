const express = require('express');
const path = require('path');
const router = express.Router();
const spotify = require('../public/js/spotify.js')


router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/../views/home.html'));
    
});

router.post('/search', function(req, res) {
    res.sendFile(path.join(__dirname+'/../views/home.html'));
    var songTitle = req.body.songInput;
    var artistTitle = req.body.artistInput;
    console.log(req.body.songInput);
    console.log(req.body.artistInput);

    var response = spotify.createQuery(songTitle, artistTitle);
    console.log(response);
});


router.get('/test', function(req, res) {
    res.send('test');
    res.end();
});


module.exports = router;