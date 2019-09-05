# next-camelize
> CameCase for next.

## installation
```bash
npm install -S afeiship/next-camelize --registry=https://registry.npm.taobao.org
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
