const obj = { x: 100, y: 200 };
// ES6 Proxy：对象的劫持代理
const proxyObj = new Proxy(obj, {
  get: (target, key) => {
    console.log('===getter:', target, key);
    return target[key];
  },
  set: (target, key, value) => {
    target[key] = value;
    console.log('===setter:', target, key, value);
  },
});
proxyObj.x = 300;
console.log('===', proxyObj.y);
