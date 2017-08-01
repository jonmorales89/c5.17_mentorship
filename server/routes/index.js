// Load route modules
let ingredients = require('./ingredients');
let vegetables  = require('./vegetables');
let fruits      = require('./fruits');
let proteins    = require('./proteins');


// We'll be using express.Router to handle
// our multiple API endpoints
let express     = require('express');
let router      = express.Router();


// Similar to app.use() in Express, however
// the purpose will be used to consume 
// modules exported from our API endpoints
router.use('/ingredients', ingredients);
router.use('/ingredients/vegetables', vegetables);
router.use('/ingredients/fruits', fruits);
router.use('/ingredients/proteins', proteins);


// Export router object containing all API
// modules to be consumed by express application
module.exports = router;