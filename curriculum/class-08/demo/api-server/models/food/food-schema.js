'use strict';

const mongoose = require('mongoose');

const food = mongoose.Schema( {

  name: { type: String, required: true},
  calories: { type: Number, required: true},
  type: { type: String, uppercase: true, enum: ['FRUIT', 'VEGETABLES', 'PROTEIN']},
});

module.exports = mongoose.model('food', food);
