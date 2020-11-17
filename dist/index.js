/*!
 * name: @jswork/next-camelize
 * description: CameCase for next.
 * homepage: https://github.com/afeiship/next-camelize
 * version: 1.0.0
 * date: 2020-11-17T08:42:30.418Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var EMPTY_STR = '';
  var camelCaseRE = /[-_.]+(.)?/g;

  nx.camelize = function (inStr) {
    var str = (inStr || EMPTY_STR).replace(camelCaseRE, function (_, chr) {
      return chr ? chr.toUpperCase() : EMPTY_STR;
    });
    return str[0].toLowerCase() + str.slice(1);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.camelize;
  }
})();
