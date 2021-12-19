const express = require('express');
const _ = require('lodash');
const { Favourite, validateFavourite } = require('../models/favourite');
const auth = require('../middleware/auth');
const router = express.Router();

router.get("/", auth, async (req, res) => {
  const favourites = await Favourite.find({ user_id: req.user._id, card_id: req.body.card_id });
  res.json(favourites);
});

// router.get("/all-cards", auth, async (req, res) => {
//   const cards = await Card.find();
//   res.json(cards);
// });

// router.get("/favourite-cards", auth, async (req, res) => {
//   const cards = await Card.find({ user_id: req.user._id, fav });
//   res.json(cards);
// });

router.delete('/:id', auth, async (req, res) => {

  const favourite = await Favourite.findOneAndRemove({ _id: req.params.id, user_id: req.user._id });
  if (!favourite) return res.status(404).send('The favourite with the given ID was not found.');
  res.send(favourite);

});

// router.put('/:id', auth, async (req, res) => {

//   const { error } = validateCard(req.body);
//   if (error) return res.status(400).send(error.details[0].message);

//   let card = await Card.findOneAndUpdate({ _id: req.params.id, user_id: req.user._id }, req.body);
//   if (!card) return res.status(404).send('The card with the given ID was not found.');

//   card = await Card.findOne({ _id: req.params.id, user_id: req.user._id });
//   res.send(card);

// });

// router.get('/:id', auth, async (req, res) => {

//   const card = await Card.findOne({ _id: req.params.id, user_id: req.user._id });
//   if (!card) return res.status(404).send('The card with the given ID was not found.');
//   res.send(card);

// });

router.post('/', auth, async (req, res) => {

  const { error } = validateFavourite(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let favourite = new Favourite(
    {
      card_id: req.body.card_id,
      user_id: req.user._id
    }
  );

  post = await favourite.save();
  res.send(post);

});

module.exports = router;