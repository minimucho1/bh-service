var express = require('express');
var router = express.Router();

const mockData = {
    anime: [
        {
          "id": 0,
          "name": "Goblin Slayer",
          "rank": 7,
          "votes": 65
        },
        {
          "id": 1,
          "name": "Sword Art Online: Alicization",
          "rank": 2,
          "votes": 99
        },
        {
          "id": 2,
          "name": "Seishun Buta Yarou wa Bunny Girl-senpai no Yume wo Minai",
          "rank": 1,
          "votes": 100
        },
        {
          "id": 3,
          "name": "Zombie Land Saga",
          "rank": 4,
          "votes": 85
        },
        {
          "id": 4,
          "name": "Tokyo Ghoul:re 2",
          "rank": 6,
          "votes": 71
        },
        {
          "id": 5,
          "name": "SSSS.Gridman",
          "rank": 8,
          "votes": 57
        },
        {
          "id": 6,
          "name": "Fairy Tail",
          "rank": 9,
          "votes": 52
        },
        {
          "id": 7,
          "name": "Yagate Kimi ni Naru",
          "rank": 3,
          "votes": 86
        },
        {
          "id": 8,
          "name": "Kaze ga Tsuyoku Fuiteru",
          "rank": 10,
          "votes": 49
        },
        {
          "id": 9,
          "name": "Golden Kamuy 2",
          "rank": 12,
          "votes": 1
        },
        {
          "id": 10,
          "name": "Release the Spyce",
          "rank": 11,
          "votes": 31
        },
        {
          "id": 11,
          "name": "Jojo no Kimyou na Bouken: Ougon no Kaze",
          "rank": 5,
          "votes": 79
        }
      ]
  };

/* GET /anime */
router.get('/', function(req, res, next) {
  res.send(mockData);
});

router.param('id', function(req, res, next, id) {
    var matchingAnime = mockData.anime.find(function(element) {
        return element.id == id;
    });
    if (matchingAnime === undefined) {
        res.send(404);
    }
    res.send(matchingAnime);
    next();
});

router.get('/id/:id', function(req, res) {
    res.end();
});


/* GET /anime?sort=rank */
router.get('/anime?sort=rank', function(req, res, next, rank){

    // var array = [];

    // for (var key in mockData) {
    //     array.push(anime[key]);
      
    // }
    
    // array.sort(function(a, b){
    //     return b.score - a.score;
    // });
    
    // var score = 1;
    // for (var i = 0; i < array.length; i++) {
    //   if (i > 0 && array[i].rank < array[i - 1].rank) {
    //     score++;
    //   }
    //     array[i].rank = rank;
    // }
    
anime.sort(function(a, b){
    return b - a;
});
var rank = 1;
for (var i = 0; i < anime.length; i++){
    if(i > 0 && anime[i].rank < anime[i - 1].score){
        rank++
    }
    anime[i].rank = rank;
}

    console.log(anime);
});








module.exports = router;
