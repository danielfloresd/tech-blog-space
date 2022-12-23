var moment = require('moment');
var pluralize = require('pluralize');

const formatDate = date => {
  return moment(date).format('MMMM Do YYYY, h:mm a');
}

const formatPlural = (str, qty) => {
  return pluralize(str, qty);
}

module.exports = { formatDate, formatPlural }