const foo = { foo: 'foo' };
const bar = { bar: 'bar' };
const fooBar = { ...foo, ...bar };

const getFooBar = () => {
  console.log(fooBar);
};

export default getFooBar;