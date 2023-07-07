import nx from '@jswork/next';

const EMPTY_STR = '';
const camelCaseRE = /[-_.]+(.)?/g;

nx.camelize = function (inStr) {
  var str = (inStr || EMPTY_STR).replace(camelCaseRE, function (_, chr) {
    return chr ? chr.toUpperCase() : EMPTY_STR;
  });
  return str[0].toLowerCase() + str.slice(1);
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.camelize;
}

export default nx.camelize;
