var nx = require('@feizheng/next-js-core2');
require('../src/next-camelize');

describe('next/camelize', function() {
  test('nx.camelize str: font-size fontSize', function() {
    var str = 'font-size';
    var str2 = nx.camelize(str);

    expect(str2).toBe('fontSize');
  });

  test('nx.camelize str: font.size fontSize', function() {
    var str = 'font.size';
    var str2 = nx.camelize(str);

    expect(str2).toBe('fontSize');
  });

  test('nx.camelize str: font_size fontSize', function() {
    var str = 'font_size';
    var str2 = nx.camelize(str);

    expect(str2).toBe('fontSize');
  });

  test('nx.camelize str: abc.fontSize abcFontSize', function() {
    var str = 'abc.fontSize';
    var str2 = nx.camelize(str);

    expect(str2).toBe('abcFontSize');
  });

  test('nx.camelize str: FontSize -> fontSize', function() {
    var str = 'FontSize';
    var str2 = nx.camelize(str);
    expect(str2).toBe('fontSize');
  });
});
