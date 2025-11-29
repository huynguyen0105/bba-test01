# Buổi học số 4 – JavaScript Basic (Continue)

## 1. Phạm vi của biến (Variable Scope)

JavaScript có 3 loại phạm vi chính:

1. Global Scope : Biến khai báo ngoài mọi hàm/block -> truy cập được ở mọi nơi.
```js
var a = 10;
let b = 20;
```
2. Function Scope : Biến khai báo bằng var, let, const bên trong hàm chỉ truy cập được trong hàm đó.
```js
function test() {
  var x = 5;
}
```
3. Block Scope : let và const tồn tại trong block {}.
   - var KHÔNG có block scope.
```js
if (true) {
  let x = 1;
  var y = 2;
}
console.log(y); // ok
console.log(x); // error
```
- Hoisting : var được hoisting -> giá trị mặc định undefined

let, const bị hoisting nhưng nằm trong Temporal Dead Zone -> gây lỗi nếu dùng trước khi khai báo.

## 2. break và continue
- break : Dừng vòng lặp ngay lập tức.
```js
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
}
```
- continue : Bỏ qua lần lặp hiện tại, sang lần kế tiếp.
```js
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}
```
## 3. Câu điều kiện nâng cao
- if – else
```js
if (score >= 60) {
  console.log("Pass");
} else {
  console.log("Fail");
}
```
- if – else if – else : Nhiều điều kiện liên tiếp.

- Ternary operator : Viết ngắn gọn cho if–else.
```js
let status = age >= 18 ? "Adult" : "Child";
```
## 4. Vòng lặp nâng cao
- for...in : Duyệt key của object (không khuyến khích dùng với array).
```js
for (let key in obj) { ... }
```
forEach : Duyệt array, không dùng break / continue.
```js
arr.forEach(item => console.log(item));
```
## 5. Utils function – String

#### Một số method quan trọng:
```js
trim(), trimLeft(), trimRight()

toLowerCase(), toUpperCase()

includes()

replace(old, new)

split(separator)

substring(start, end)

indexOf()
```
## 6. Utils function – Array
```js
• map() : Tạo mảng mới bằng cách “biến đổi” từng phần tử.

• filter() : Lọc các phần tử thỏa mãn điều kiện.

• find() : Tìm phần tử đầu tiên phù hợp.

• reduce() : Tích lũy thành 1 giá trị duy nhất.

• some() : Kiểm tra có ít nhất 1 phần tử đúng điều kiện.

• every() : Kiểm tra tất cả phần tử đúng điều kiện.

• sort() : Sắp xếp mảng, làm thay đổi mảng gốc.

• push / pop / shift / unshift : Thay đổi mảng gốc.
```