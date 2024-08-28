// src/client/index.js
const channel = require('./auditlog/channel');
const savelog = require('./auditlog/savelog');

module.exports = {
  channel,
  savelog
};