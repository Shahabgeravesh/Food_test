  
const router = require('express').Router();

const FoodRoutes = require('./Food_route');

router.use('/Food', FoodRoutes);

module.exports = router;

//export Food routes using router so that the index.js file in the controllers folder can use the client-route.js file