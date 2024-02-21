var anglicize = require("anglicize");

module.exports = variableName;

function variableName (str) {
  return anglicize(str).toLowerCase().replace(/[^a-zA-Z0-9\s]+/g,' ').replace(/^[\d\s]+/g,'').split(' ').reduce(function (a,b) {
    return a + b.charAt(0).toUpperCase() + b.slice(1).toLowerCase();
  });
}
