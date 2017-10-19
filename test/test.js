var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-camelize');

describe('next/camelize', function () {

  it('nx.camelize str: font-size fontSize', function () {
    var str = 'font-size';
    var str2 = nx.camelize(str);

    assert.equal( str2, 'fontSize');
  });

  it('nx.camelize str: font.size fontSize', function () {
    var str = 'font.size';
    var str2 = nx.camelize(str);

    assert.equal( str2, 'fontSize');
  });

  it('nx.camelize str: font_size fontSize', function () {
    var str = 'font_size';
    var str2 = nx.camelize(str);

    assert.equal( str2, 'fontSize');
  });

});
