'use strict';

const events = require('./events.js');

events.on('save', handleSave);

function handleSave(payload) {
  console.log(`Record ${payload.id} was saved`);
  events.emit('cache-update', { id:payload.id});
}