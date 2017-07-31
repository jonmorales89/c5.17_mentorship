let express     = require('express');
let models      = require('../models');

let router      = express.Router();
let Ingredients = models.ingredients;


router.get('/', (req,res) => {
    Ingredients.findAll({
        where: {
            foodType: "protein"
        }
    })
      .then(data => {
          res.status(200).json({"Success": true, "protein": data});
          res.send(200).send("We have the protein");
      }).catch(err => {
          res.status(404).send("We couldn't find any of your proteins");
      })
});

router.post('/', (req,res) => {
    Ingredients.create({
        ingredient: req.body.ingredient,
        foodType: "protein",
        quantity: req.body.quantity,
        daysTilExpiration: req.body.daysTilExpiration,
        createdAt: new Date(),
        updatedAt: new Date()
    }).then(data => {
        res.status(200).send({"Success": true, "data": data})
    }).catch(err => {
        res.status(404).json({"Success": false, "Message": "Error 404!"})
    })
});

module.exports = router;