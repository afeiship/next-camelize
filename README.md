# next-camelize
> CameCase for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-camelize
```

## usage
```js
import '@jswork/next-camelize';

nx.camlize('font-size');
nx.camlize('font.size');
nx.camlize('font_size');
//fontSize

nx.camlize('abc.fontSize'); 
//abcFontSize
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-camelize/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-camelize
[version-url]: https://npmjs.org/package/@jswork/next-camelize

[license-image]: https://img.shields.io/npm/l/@jswork/next-camelize
[license-url]: https://github.com/afeiship/next-camelize/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-camelize
[size-url]: https://github.com/afeiship/next-camelize/blob/master/dist/next-camelize.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-camelize
[download-url]: https://www.npmjs.com/package/@jswork/next-camelize
