const express = require('express');
const _ = require('lodash');
const { Card, validateCard, generateBizNumber } = require('../models/card');
const auth = require('../middleware/auth');
const router = express.Router();

router.get("/my-cards", auth, async (req, res) => {
  if (!req.user.biz) {
    return res.status(401).send("Access Denied");
  }

  const cards = await Card.find({ user_id: req.user._id });
  res.json(cards);
});

router.get("/favourite-cards", auth, async (req, res) => {
  const cards = await Card.find({ favouriteBy: { $in: [req.user._id] } });
  res.json(cards);
});

router.get('/:id', auth, async (req, res) => {

  const card = await Card.findOne({ _id: req.params.id, user_id: req.user._id });
  if (!card) return res.status(404).send('The card with the given ID was not found.');
  res.send(card);

});

router.get("/", async (req, res) => {
  const cards = await Card.find();
  res.json(cards);
});

router.delete('/:id', auth, async (req, res) => {

  const card = await Card.findOneAndRemove({ _id: req.params.id, user_id: req.user._id });
  if (!card) return res.status(404).send('The card with the given ID was not found.');
  res.send(card);

});

router.put('/:id', auth, async (req, res) => {

  const { error } = validateCard(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let card = await Card.findOneAndUpdate({ _id: req.params.id, user_id: req.user._id }, req.body);
  if (!card) return res.status(404).send('The card with the given ID was not found.');

  card = await Card.findOne({ _id: req.params.id, user_id: req.user._id });
  res.send(card);

});

router.put('/:id/favourite/add', auth, async (req, res) => {

  let card = await Card.findOne({ _id: req.params.id });
  if (!card) return res.status(404).send('The card with the given ID was not found.');

  if (!card.favouriteBy.includes(req.user._id)) {
    card.favouriteBy = [...card.favouriteBy, req.user._id];
    let returningCard = await Card.findOneAndUpdate({ _id: req.params.id }, card, { new: true });
    res.send(returningCard);
  } else {
    return res.status(404).send('The card with the given ID is already on your favourites.');
  }

});

router.put('/:id/favourite/remove', auth, async (req, res) => {

  let card = await Card.findOne({ _id: req.params.id });
  if (!card) return res.status(404).send('The card with the given ID was not found.');

  if (card.favouriteBy.includes(req.user._id)) {
    card.favouriteBy = card.favouriteBy.filter(id => id !== req.user._id);
    let returningCard = await Card.findOneAndUpdate({ _id: req.params.id }, card, { new: true });
    res.send(returningCard);
  } else {
    return res.status(404).send('The card with the given ID is NOT on your favourites.');
  }

});

router.post('/', auth, async (req, res) => {

  const { error } = validateCard(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let card = new Card(
    {
      bizName: req.body.bizName,
      bizDescription: req.body.bizDescription,
      bizAddress: req.body.bizAddress,
      bizPhone: req.body.bizPhone,
      bizImage: req.body.bizImage ? req.body.bizImage : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      bizNumber: await generateBizNumber(Card),
      user_id: req.user._id,
      favouriteBy: []
    }
  );

  post = await card.save();
  res.send(post);

});

module.exports = router;