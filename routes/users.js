var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([
    {
      id: 1,
      username: "Goblin Slayer"
    },
    {
      id: 2,
      username: "Sword Art Online: Alicization"
    },
    {
  	  id: 3,
  	  username: "Bunny Girl-Senpai"
    },
    {
  	  id: 4,
  	  username: "Zombie Land Saga"
    },
    {
  	  id: 5,
  	  username: "Tokyo Ghoul:re 2"
    },
    {
  	  id: 6,
    	username: "SSSS.Gridman"
    },
    {
    	id: 7,
    	username: "Fairy Tail"
    },
    {
  	  id: 8,
  	  username: "Bloom Into You"
    },
    {
  	  id: 9,
  	  username: "Run with the Wind"
    },
    {
  	  id: 10,
  	  username: "Golden Kamuy 2"
    },
    {
  	  id: 11,
  	  username: "Release the Spyce"
    },
    {
  	  id: 12,
  	  username: "Jojo no Kimyou na Bouken: Ougon no Kaze"
    }]);
});

module.exports = router;