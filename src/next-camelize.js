(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var EMPTY_STR = '';
  var camelCaseRE = /[-_]+(.)?/g;

  nx.camelize = function (inStr) {
    return (inStr || EMPTY_STR).replace(camelCaseRE, function (match, chr) {
      return chr ? chr.toUpperCase() : EMPTY_STR;
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxCamelize;
  }

}());
