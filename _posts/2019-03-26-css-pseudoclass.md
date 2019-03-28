---
layout: post
title:  "가상클래스(추상클래스, 수도클래스, pseudo-class)"
date:   2019-03-26 13:50:19 +0900
categories: [css, web]
tags: [css, web]
comments: true
author : piki
---

## link, visited, hover, active
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
a:link { /*방문하지 않은 링크*/
  background-color: yellow;
}
a:visited { /*방문한 링크*/
  background-color: blue;
}
a:hover { /*링크 위에 마우스 올려놨을때*/
  background-color: red;
}
a:active { /*링크가 활성화(마우스 클릭뒤)*/
  background-color: green;
}
</style>
</head>
<body>
  <a href="https://www.daum.net" target="_blank">Daum</a>
  <a href="https://www.naver.com" target="_blank">Naver</a>
  <a href="https://www.google.com" target="_blank">Google</a>
  <a href="https://www.nate.com" target="_blank">Nate</a>
</body>
</html>
```

## focus
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
 input:focus{
  background-color: yellow;
 }
</style>
</head>
<body>
  <input type="text" name="txt1" autofocus />
  <br/>
  <input type="text" name="txt3" />
</body>
</html>
```

## empty
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  p {
    width: 200px;
    height: 20px;
    border : 1px solid red;
  }
  p:empty{
    background-color: yellow;
  }
</style>
</head>
<body>
  <p>Not Empty</p>
  <p></p>
  <p> </p>
</body>
</html>
```

## first-child, last-child
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  p:first-child {
    background-color: yellow;
  }
  p:last-child {
    background-color: red;
  }
</style>
</head>
<body>
  <p>first child</p>
  <p>not first</p>
  <p>not first</p>
  <p>not last</p>
  <p>not last</p>
  <p>last child</p>
</body>
</html>
```

## read-only, read-write
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  input:read-only{
    background-color: yellow;
  }
  input:-moz-read-only{
    background-color: yellow;
  }
  input:read-write{
    background-color: red;
  }
  input:-moz-read-write{
    background-color: red;
  }
</style>
</head>
<body>
  <input type="text" name="txt1" readonly />
  <br/>
  <input type="text" name="txt3" />
</body>
</html>
```

## required
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
 input:required{
  background-color: yellow;
 }
</style>
</head>
<body>
  <input type="text" name="txt1" required />
  <br/>
  <input type="text" name="txt3" />
</body>
</html>
```

## target
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  /*:target {
    border: 2px solid red;
    background-color: yellow;
  }*/
  p:target {
    border: 2px solid red;
    background-color: yellow;
  }
</style>
</head>
<body>
  <p><a href="#news1">Jump to New content 1</a></p>
  <p><a href="#news2">Jump to New content 2</a></p>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <p id="news1"><b>New content 1...</b></p>
  <p id="news2"><b>New content 2...</b></p>
</body>
</html>
```

## valid
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
 input:valid{
  background-color: yellow;
 }
</style>
</head>
<body>
  <input type="email" value="aaa@aaa.com" />
  <br/>
</body>
</html>
```

## checked
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  input:checked {
    height: 30px;
    width: 30px;
  }
</style>
</head>
<body>
  <input type="radio" checked value="male" name="gender"> Male<br>
  <input type="radio" value="female" name="gender"> Female<br>
  <input type="checkbox" checked value="Bike"> I have a bike<br>
  <input type="checkbox" value="Car"> I have a car 
</body>
</html>
```

## enabled, disabled
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  input[type=text]:enabled {
    background: #ffff00;
  }

  input[type=text]:disabled {
    background: #dddddd;
  }
</style>
</head>
<body>
  <input type="text" disabled value="disabled" />
  <input type="text" value="enabled" />
</body>
</html>
```

## not
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  p {
    color:red;
  }
  :not(p) {
    color:black;
  }
</style>
</head>
<body>
  <h1>Not p tag</h1>
  <div>Not p tag</div>
  <p>p tag</p>
  <a href="https://www.daum.net">Not p tag</a>
</body>
</html>
```

## nth-child(n), nth-last-child(n)
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  tr:nth-child(2n-1) {
    background-color: yellow;
  }
  tr:nth-child(2n) {
    background-color: red;
  }
</style>
</head>
<body>
  <table>
    <tr>
       <td>1</td><td>2</td><td>3</td><td>4</td>
    </tr>
    <tr>
       <td>1</td><td>2</td><td>3</td><td>4</td>
    </tr>
    <tr>
       <td>1</td><td>2</td><td>3</td><td>4</td>
    </tr>
    <tr>
       <td>1</td><td>2</td><td>3</td><td>4</td>
    </tr>
    <tr>
       <td>1</td><td>2</td><td>3</td><td>4</td>
    </tr>
  </table>
</body>
</html>
```

## first-letter
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  p::first-letter {
    font-size: 150%;
    color: blue;
    text-transform : uppercase;
  }
</style>
</head>
<body>
  <h1>Welcome to My Homepage</h1>
  <p>스타일 테스트 중입니다.</p>
  <p>이 선택자는 first-letter 입니다.</p>
  <p>first-letter는 요소의 첫번째 문자를 선택합니다. </p>

  <p><b>note:</b> For this selector to work in IE 5.5-8, you must specify the old, single-colon CSS2 syntax (:first-letter instead of ::first-letter).</p>
</body>
</html>
```

## first-line
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  p::first-line {
    background-color: yellow;
  }
</style>
</head>
<body>
  <h1>WWF's Mission Statement</h1>
<p>To stop the degradation of the planet's natural environment and to build a future in which humans live in harmony with nature, by; conserving the world's biological diversity, ensuring that the use of renewable natural resources is sustainable, and promoting the reduction of pollution and wasteful consumption.To stop the degradation of the planet's natural environment and to build a future in which humans live in harmony with nature, by; conserving the world's biological diversity, ensuring that the use of renewable natural resources is sustainable, and promoting the reduction of pollution and wasteful consumption.To stop the degradation of the planet's natural environment and to build a future in which humans live in harmony with nature, by; conserving the world's biological diversity, ensuring that the use of renewable natural resources is sustainable, and promoting the reduction of pollution and wasteful consumption.To stop the degradation of the planet's natural environment and to build a future in which humans live in harmony with nature, by; conserving the world's biological diversity, ensuring that the use of renewable natural resources is sustainable, and promoting the reduction of pollution and wasteful consumption.</p>
</body>
</html>
```

## before, after
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  p::before {
    content: "• ";
  }
  p::after {
    content: ".....";
  }
</style>
</head>
<body>
  <h1>Welcome to My Homepage</h1>
  <p>스타일 테스트 중입니다.</p>
  <p>이 선택자는 first-letter 입니다.</p>
  <p>first-letter는 요소의 첫번째 문자를 선택합니다. </p>
</body>
</html>
```

## required
```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
 ::-webkit-input-placeholder { /* Edge */
    color: red;
  }
  
  :-ms-input-placeholder { /* Internet Explorer */
    color: red;
  }
  
  ::placeholder {
    color: red;
  }
</style>
</head>
<body>
  <input type="text" name="fname" placeholder="First name">
</body>
</html>
```