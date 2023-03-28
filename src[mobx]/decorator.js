/*
const test = (target) => {
  target.name1 = 'name';
  target.fn = () => {};
};
// 修饰类的装饰器：相当于test(Demo)
@test
class Demo {}
console.dir(Demo);
*/

const test = (target, name, descriptor) => {
  /* 
  target:Demo.prototype
  name:'x'
  descriptor:{configurable: true, enumerable: true, writable: true, initializer: ƒ}  修饰的属性，则初始值是基于initializer函数设置的！！ 
  */
  /* 
  target:Demo.prototype
  name:'getX'
  descriptor:{configurable: true, enumerable: false, writable: true, value: ƒ}  修饰的函数，则初始值是基于value属性设置的！！ 
  */
  // console.log(target, name, descriptor);
};
class Demo {
  @test x;
  @test
  getX() {}
}
// 给类的属性设置装饰器，创建实例触发装饰器执行
let d = new Demo();
// console.log(d);

const readonly = (_target, _name, descriptor) => {
  // 设置为不可修改
  descriptor.writable = false;
};
// 记录函数运行所需时间
const logTimer = (_target, name, descriptor) => {
  // 原来的函数
  const originFn = descriptor.value;
  descriptor.value = function (...params) {
    console.time(name);
    const res = originFn.apply(this, ...params);
    console.timeEnd(name);
    return res;
  };
};
class DemoDecorator {
  @readonly x = 100;
  @logTimer
  getX() {
    for (let i = 0; i < 100000000; i++) {}
    return this.x;
  }
}
const demo = new DemoDecorator();
console.log(demo.getX());
