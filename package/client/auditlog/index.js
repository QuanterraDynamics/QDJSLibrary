// src/client/index.js
const channel = require('./auditlog/channel');
const savelog = require('./savelog');

module.exports = {
  channel,
  savelog
};
