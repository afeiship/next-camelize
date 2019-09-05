/*!
 * name: next-camelize
 * url: https://github.com/afeiship/next-camelize
 * version: 1.0.0
 * date: 2019-09-05T03:54:41.325Z
 * license: MIT
 */

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

//# sourceMappingURL=next-camelize.js.map
