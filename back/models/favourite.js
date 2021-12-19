const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)
const mongoose = require('mongoose');
const _ = require('lodash');

const favouriteSchema = new mongoose.Schema({
    card_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Favourite = mongoose.model('Favourite', favouriteSchema);

function validateFavourite(favourite) {
    const schema = Joi.object({
        card_id: Joi.objectId(),
    });
    return schema.validate(favourite);
}

exports.Favourite = Favourite;
exports.validateFavourite = validateFavourite;