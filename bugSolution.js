function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined) {
    return null; // Explicitly handle undefined values
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // null
console.log(foo(undefined, 2)); // null
console.log(foo(1, undefined)); // null