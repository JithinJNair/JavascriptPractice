//*type coercion- 


//* Typeconversion-Process of converting data from one type to another.
//*  Explicit Type conversion- Converting the type of data by developer.

let i1="Allen";
console.log(i1);
console.log(typeof(i1));//console.log(typeof i1) this works too.
let i2 = String(55);
console.log(i2);
console.log(typeof i2);
let i3 = String(false);
console.log(i3);
console.log(typeof i3);
let i4 = String(null);
console.log(i4);
console.log(typeof i4);

let i5 = Number("Delhi");
console.log(i5);//Nan
console.log(typeof Number(10));
console.log(typeof Number(true));//Number(true) value will be 1.
console.log(Number(null)+":"+typeof Number(null));//0:number

//* Falsy Values- Values that becomes false with respect to boolen are Falsy values
/*

JavaScript type conversion is the process of changing a value from one data type to another. It can happen **automatically (implicit conversion)** or **manually (explicit conversion)**.

## 1. Implicit Type Conversion (Type Coercion)

JavaScript automatically converts one data type to another when needed.

### Examples

```javascript
let result = "5" + 2;
console.log(result); // "52" (Number converted to String)
```

```javascript
let result = "5" - 2;
console.log(result); // 3 (String converted to Number)
```

```javascript
console.log(true + 1); // 2
// true is converted to 1
```

```javascript
console.log(false + 5); // 5
// false is converted to 0
```

```javascript
console.log(null + 1); // 1
// null becomes 0
```

```javascript
console.log(undefined + 1); // NaN
```

---

## 2. Explicit Type Conversion

The programmer manually converts data types using built-in functions.

### a) Convert to Number

Use `Number()`, `parseInt()`, or `parseFloat()`.

```javascript
Number("123");      // 123
Number("123.45");   // 123.45
Number(true);       // 1
Number(false);      // 0
Number(null);       // 0
Number("abc");      // NaN

parseInt("25px");   // 25
parseFloat("3.14"); // 3.14
```

---

### b) Convert to String

Use `String()` or `.toString()`.

```javascript
String(123);      // "123"
String(true);     // "true"

(123).toString(); // "123"
```

---

### c) Convert to Boolean

Use `Boolean()`.

```javascript
Boolean(1);        // true
Boolean(0);        // false
Boolean("");       // false
Boolean("Hello");  // true
Boolean(null);     // false
Boolean(undefined);// false
Boolean(NaN);      // false
```

---

## Common Conversion Rules

| Original Value | Number | String        | Boolean |
| -------------- | ------ | ------------- | ------- |
| `"123"`        | 123    | `"123"`       | true    |
| `""`           | 0      | `""`          | false   |
| `true`         | 1      | `"true"`      | true    |
| `false`        | 0      | `"false"`     | false   |
| `null`         | 0      | `"null"`      | false   |
| `undefined`    | NaN    | `"undefined"` | false   |
| `NaN`          | NaN    | `"NaN"`       | false   |

---

## Equality and Type Conversion

### Loose Equality (`==`)

Performs type conversion before comparison.

```javascript
5 == "5";     // true
true == 1;    // true
null == undefined; // true
```

### Strict Equality (`===`)

No type conversion; both value and type must match.

```javascript
5 === "5";    // false
5 === 5;      // true
```

---

## Examples

```javascript
console.log("10" + 5);     // "105"
console.log("10" - 5);     // 5
console.log("10" * 5);     // 50
console.log("10" / 2);     // 5
console.log(Boolean(""));  // false
console.log(Number("20")); // 20
```

## Key Points

* **Implicit conversion (coercion)** happens automatically during operations.
* **Explicit conversion** is performed using `Number()`, `String()`, and `Boolean()`.
* The `+` operator concatenates strings if either operand is a string.
* Arithmetic operators (`-`, `*`, `/`, `%`) generally convert operands to numbers.
* Prefer **strict equality (`===`)** over loose equality (`==`) to avoid unexpected type conversions.*/


