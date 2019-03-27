---
layout: post
title: "select, option 태그"
date: 2019-03-25 13:50:19 +0900
categories: [html, web]
tags: [html, web]
comments: true
author : piki
---

##select
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
</head>
<body>
<form action="atest.html" method="get" >
 <select name="drink">
  <option value="coffee">Coffee</option>
  <option value="water">Water</option>
  <option value="tea">Tea</option>
  <option value="cola">Cola</option>
</select>
 <input type="submit" value="Submit">
</form>
</body>
</html>
```

##autofocus, name
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
</head>
<body>
<form action="atest.html" method="get" >
 <select name="drink" autofocus>
  <option value="coffee">Coffee</option>
  <option value="water">Water</option>
  <option value="tea">Tea</option>
  <option value="cola">Cola</option>
</select>
 <input type="submit" value="Submit">
</form>
</body>
</html>
```

##disabled
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
</head>
<body>
<form action="atest.html" method="get" >
 <select name="drink" disabled>
  <option value="coffee">Coffee</option>
  <option value="water">Water</option>
  <option value="tea">Tea</option>
  <option value="cola">Cola</option>
</select>
 <input type="submit" value="Submit">
</form>
</body>
</html>
```


##size
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
</head>
<body>
<form action="atest.html" method="get" >
 <select name="drink" size="3">
  <option value="coffee">Coffee</option>
  <option value="water">Water</option>
  <option value="tea">Tea</option>
  <option value="cola">Cola</option>
</select>
 <input type="submit" value="Submit">
</form>
</body>
</html>
```


##option-disabled
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
</head>
<body>
<form action="atest.html" method="get" >
 <select name="drink">
  <option value="coffee">Coffee</option>
  <option value="water" disabled>Water</option>
  <option value="tea">Tea</option>
  <option value="cola">Cola</option>
</select>
 <input type="submit" value="Submit">
</form>
</body>
</html>
```


##option-label
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
</head>
<body>
<form action="atest.html" method="get" >
 <select name="drink1">
  <option label="Coffee">CoffeeCoffeeCoffeeCoffee</option>
  <option label="Water">WaterWaterWater</option>
  <option label="Tea">TeaTeaTeaTea</option>
  <option label="Cola">ColaColaColaCola</option>
</select>
<select name="drink2">
  <optionlabel="Coffee" value="coffee">CoffeeCoffeeCoffeeCoffee</option>
  <optionlabel="Water" value="water">WaterWaterWater</option>
  <optionlabel="Tea" value="tea">TeaTeaTeaTea</option>
  <optionlabel="Cola" value="cola">ColaColaColaCola</option>
</select>
 <input type="submit" value="Submit">
</form>
</body>
</html>
```

##option-selected
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>test</title>
</head>
<body>
<form action="atest.html" method="get" >
 <select name="drink">
  <option value="coffee">Coffee</option>
  <option value="water" selected>Water</option>
  <option value="tea">Tea</option>
  <option value="cola">Cola</option>
</select>
 <input type="submit" value="Submit">
</form>
</body>
</html>
```