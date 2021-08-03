const router = require('express').Router();
const Food = require('../Models/Food');

router.post('/', async (req, res) => {
    console.log(req.body);
  try {
    const FoodData = await Food.create({
      Food_name: req.body.Food_name,
      Ingredients: req.body.Ingredients,
      Steps: req.body.Steps,
      Timers: req.body.Timers,
      imageURL: req.body.imageURL,
      originalURL: req.body.originalURL,
      
    });
    res.status(200).json(FoodData);
  } catch (err) {
    res.status(400).json(err);
  }
});


//not being used yet
router.put('/:id', async (req, res) => {
  try {
    const Food = await Food.update(
      {
        Food_name: req.body.Food_name,
      Ingredients: req.body.Ingredients,
      Steps: req.body.Steps,
      Timers: req.body.Timers,
      imageURL: req.body.imageURL,
      originalURL: req.body.originalURL,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(Food);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;