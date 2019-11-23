# next-camelize
> CameCase for next.

## installation
```bash
npm install -S @feizheng/next-camelize
```

## usage
```js
nx.camlize('font-size');
nx.camlize('font.size');
nx.camlize('font_size');
//fontSize

nx.camlize('abc.fontSize'); 
//abcFontSize
```
