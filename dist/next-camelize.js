/*!
 * name: @feizheng/next-camelize
 * url: https://github.com/afeiship/next-camelize
 * version: 1.0.0
 * date: 2019-11-23T13:37:50.942Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
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
