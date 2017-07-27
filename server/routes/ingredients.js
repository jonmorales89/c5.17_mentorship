let express     = require('express');
let models      = require('../models');

let router      = express.Router();
let Ingredients = models.ingredients;


router.get('/', (req,res) => {
    res.status(200).send("Hey, keep track of your ingredients here!");
});


module.exports = router;