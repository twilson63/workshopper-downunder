var _ = require('underscore');

var n = process.argv[2];

_.times(n, function(i) {
    var _year = (new Date()).getFullYear();
  console.log(_year - i);
});