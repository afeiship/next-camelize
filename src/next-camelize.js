(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var EMPTY_STR = '';
  var camelCaseRE = /[-_.]+(.)?/g;

  nx.camelize = function(inStr) {
    var str = (inStr || EMPTY_STR).replace(camelCaseRE, function(match, chr) {
      return chr ? chr.toUpperCase() : EMPTY_STR;
    });
    return str[0].toLowerCase() + str.slice(1);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.camelize;
  }
})();
