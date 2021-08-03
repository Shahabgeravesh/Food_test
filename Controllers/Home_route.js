const router = require('express').Router();
const Food = require('./Models/Food');

// route to get all Foods from the Food.handlebars file/page
router.get('/', async (req, res) => {
    const FoodData = await Food.findAll().catch((err) => { 
        res.json(err);
      });
      //this Foods const is passed in the handlebars template
        const Foods = FoodData.map((Food) => Food.get({ plain: true }));

        //we state which handlebar file to render and what data will be passed into that page
        //         hb file     list of Foods(which is the array we defined ^^)
        res.render('Food', { Foods });
      });
  
  //route to get one Food
  //not being used yet
  router.get('/Food/:id', async (req, res) => {
    try{ 
        const FoodData = await Food.findByPk(req.params.id);
        if(!FoodData) {
            res.status(404).json({message: 'No Food with this id!'});
            return;
        }
        const Food = FoodData.get({ plain: true });
        res.render('Food', Food);
      } catch (err) {
          res.status(500).json(err);
      };     
  });

module.exports = router;