
# Topics:

- function invocation
- function used in instance creation
- differences demo
- fun exercise

## Invocation vs instance creation

```javascript
function foo() {
    console.log('foo is called');

    return {
        a: 10
    }
}

var f1 = foo(); // function invocation

var f2 = new foo(); // instance creation
```

## Differences in approach
When do we use a function as a function invocation and when do we use it as a function constructor or instance creator function.

You cannot use the same function for both scenarios.

Why:

```javascript
function foo() {
    this.a = 10;

    return 20;
}

var f1 = foo(); // f1 --> 20 and global.a --> 10 because here `this` points to global context.
var f2 = new foo(); f2 -> { a: 10 } and you won't get the returned output into f2
```

## What is function chaining

When using libraries like jQuery or Lodash, we normally see the function chaining.

Example:
```javascript
function Foo() {
    this.name = "foo";
}

Foo.prototype.print = function () {
    console.log("name is " + this.name);
}

Foo.prototype.bar = function () {
    console.log("it is a bar");
}

var foo = new Foo();

foo.bar(); // ✅
foo.print(); // ✅
foo.bar().print(); // ❌


Foo.prototype.print = function () {
    console.log("name is " + this.name);
    return this; // now it works.
}

Foo.prototype.bar = function () {
    console.log("it is a bar");
    return this;
}

foo.bar().print(); // ✅

```

## Question

Write a function `foo` that does this
```javascript
foo(10).add(5).subtract(3).print(); // should print 12
```

## Answer

- You cannot use this context in the function
- You cannot add the chaining methods to the prototype of the function
- You cannot call the function with new keyword.

Here is how you do it:

```javascript
function foo(num) {
  return {
    num: num,
    add: function(num) {
      this.num += num;
      return this;
    },
    subtract: function(num) {
      this.num -= num;
      return this;
    },
    print: function() {
      console.log(this.num);
      return this;
    }
  };
}
```