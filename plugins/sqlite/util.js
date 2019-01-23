var config = require('../../core/util.js').getConfig();

var watch = config.watch;
var settings = {
  exchange: 'bitfinex',
  pair: ['USD', 'BTC'],
  historyPath: config.sqlite.dataDirectory
}

module.exports = {
  settings: settings,
  table: function(name) {
    return [name, settings.pair.join('_')].join('_');
  }
}
