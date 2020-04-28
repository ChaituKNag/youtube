// foo(10).add(5).subtract(3).print(); // should print 12

function foo(num) {
  return {
    num,
    add(n) {
      this.num += n;
      return this;
    },
    subtract(n) {
      this.num -= n;
      return this;
    },
    print() {
      return this.num;
    }
  };
}

console.log(
  foo(20)
    .add(7)
    .subtract(12)
    .print()
);
