---
layout: post
title: "input 태그"
date: 2019-03-24 13:50:19 +0900
categories: [html, web]
tags: [html, web]
comments: true
author : piki
---
## disabled, readonly
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <title>test</title>
</head>
<body>
<form action="atest.html" method="get" >
 <input type="text" name="txt1" />
 <input type="text" name="txt2" disabled value="test123" />
 <input type="text" name="txt3" readonly value="test123" />
 <input type="submit" value="Submit">
</form>
</body>
</html>
```

## maxlength, name, size
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <title>test</title>
</head>
<body>
<form action="atest.html" method="get" >
 <input type="text" name="txt1" maxlength="5"  />
 <input type="submit" value="Submit">
</form>
</body>
</html>
```

## value
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <title>test</title>
</head>
<body>
<form action="atest.html" method="get" >
 <!-- button, reset, submit  -->
 <input type="button" name="btn1" value="Button Title" /><br/>
 <!-- text, password, hidden -->
 <input type="text" name="val1" value="init value" /><br/>
 <!-- checkbox, radio, image -->
 <input type="radio" name="ra1" value="1" /> One <br/>
 <input type="radio" name="ra1" value="2" /> Two <br/>
 <input type="radio" name="ra1" value="3" /> Three <br/>
  <!-- value not work -->
 <input type="file" value="12345" />
 <input type="submit" value="Submit">
</form>
</body>
</html>
```

## placeholder
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <title>test</title>
</head>
<body>
<form action="atest.html" method="get" >
 <!-- text, search, url, tel, email, and password -->
 <input type="text" name="fname" placeholder="First name"><br>
 <input type="text" name="lname" placeholder="Last name"><br>
 <input type="submit" value="Submit">
</form>
</body>
</html>
```

## list, autocomplete
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <title>test</title>
</head>
<body>
<form action="atest.html" method="get" >
 <input list="b1" autocomplete="off" name="browser">
 <datalist id="b1">
   <option value="Internet Explorer" />
   <option value="Firefox" />
   <option value="Google Chrome" />
   <option value="Opera" />
   <option value="Safari" />
 </datalist>
 <input type="submit" value="Submit">
</form>
</body>
</html>
```

## autocomplete, autofocus
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8"/>
  <title>test</title>
</head>
<body>
<form action="atest.html" method="get" >
 <input type="text" name="fname" autocomplete="off" autofocus><br>
 <input type="text" name="lname"><br>
 <input type="submit" value="Submit">
</form>
</body>
</html>
```