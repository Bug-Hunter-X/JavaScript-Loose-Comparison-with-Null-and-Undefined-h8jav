# JavaScript Loose Comparison with Null and Undefined

This repository demonstrates a common error in JavaScript stemming from the loose comparison (==) operator when checking for null or undefined values.  The `bug.js` file contains a function that incorrectly handles undefined values due to the use of loose comparison. The `bugSolution.js` file shows the corrected version using strict comparison (===).

## Bug Description
The `foo` function is intended to return null if either input `a` or `b` is null. However, it also returns null if either input is undefined.  This is because `undefined == null` evaluates to `true`. This behavior might not be the expected outcome. 

## Solution
The corrected version replaces `==` with `===` to ensure strict equality, resolving the issue by differentiating between `null` and `undefined`.  This makes the function's behavior consistent and predictable.