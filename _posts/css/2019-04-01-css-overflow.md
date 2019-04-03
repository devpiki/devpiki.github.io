---
layout: post
title: "overflow"
date: 2019-04-01 09:50:19 +0900
categories: [css, web]
tags: [css, web]
comments: true
author : piki
---

```html
<!DOCTYPE html>
<html>
<head>
<style>
div {
  background-color: lightblue;
  width: 110px;
  height: 110px;
}
div.ex1 {overflow: scroll;}
div.ex2 {overflow: hidden;}
div.ex3 {overflow: auto;}
div.ex4 {overflow: visible;}
</style>
</head>
<body>
<p>The overflow property specifies whether to clip content or to add scrollbars when an element's content is too big to fit in a specified area.</p>

<h2>overflow: scroll:</h2>
<div class="ex1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>

<h2>overflow: hidden:</h2>
<div class="ex2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>

<h2>overflow: auto:</h2>
<div class="ex3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>

<h2>overflow: visible (default):</h2>
<div class="ex4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>

</body>
</html>
```