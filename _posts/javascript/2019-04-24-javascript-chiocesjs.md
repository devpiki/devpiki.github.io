---
layout: post
title: "Choices.js"
date: 2019-04-23 13:50:19 +0900
categories: [web, javascript]
tags: [javascript, choices.js]
comments: true
author : piki
---

- 선택 박스, 텍스트 입력 관련한 javascript 플러그인
- Site : [https://joshuajohnson.co.uk/Choices/](https://joshuajohnson.co.uk/Choices/){:target="_blank"}
- Git : [https://github.com/jshjohnson/Choices](https://github.com/jshjohnson/Choices){:target="_blank"}
- 사용하기가 간편하고 vanilla.js 으로 작성 되어 있어서 가볍고 어떤 곳에서도 사용이 가능

```html
<html>
  <head>
    <!-- Include Choices CSS -->
    <link rel="stylesheet" href="https://joshuajohnson.co.uk/Choices/assets/styles/choices.min.css?version=7.0.0">
    <script src="https://joshuajohnson.co.uk/Choices/assets/scripts/choices.min.js?version=7.0.0"></script>
  </head>
  <body>
    <h1>Text inputs</h1>
    <input class="form-control" id="choices-text-remove-button" type="text" value="preset-1,preset-2" placeholder="Enter something" />
    <h1>Multiple select input</h1>
    <select class="form-control" name="choices-multiple-remove-button" id="choices-multiple-remove-button" placeholder="This is a placeholder" multiple>
		<option value="Choice 1" selected>Choice 1</option>
		<option value="Choice 2">Choice 2</option>
		<option value="Choice 3">Choice 3</option>
		<option value="Choice 4">Choice 4</option>
	</select>
	<script>
	 var textRemove = new Choices(document.getElementById('choices-text-remove-button'), {
	   delimiter: ',',
	   editItems: true,
	   maxItemCount: 5,
	   removeItemButton: true,
	 });
	var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
	  removeItemButton: true,
	});
	</script>
  </body>
</html>
```
- [예제](https://codepen.io/dev_piki/pen/gyBwOm){:target="_blank"}