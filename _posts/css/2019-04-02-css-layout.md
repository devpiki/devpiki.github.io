---
layout: post
title: "Layout"
date: 2019-04-02 09:50:19 +0900
categories: [css, web]
tags: [css, web]
comments: true
author : piki
---

## 2 Layout
```html
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
		*{margin:0;padding:0;}
        li{list-style-type:none;}
		img, fieldset{border:none;}
        li img, dd img{vertical-align:top;}		
		#header {
			background: #00f;
			height: 50px;
		}
		#container {
        	width: 100%;
        }
		#sidemenu {
			width: 30%;
			height: 500px;
			background: #0f0;
		}
		#content {
			width: 70%;
			height: 500px;
			background: #f00;
		}
		#footer {
			height: 50px;
			background: #ff0;
		}
		/*1. float 방식*/
		/*#container {
			float: left; 
		}
		#sidemenu {
			float: left;
		}
		#content {
			float: right;
		}
		#footer {
			clear: both;
		}*/
		/*2.position 방식-절대 상대위치*/
		/*#container {
			position: relative;
		}
		#sidemenu {
			position: absolute;
		}
		#content {
			position: relative;
			left: 30%;
		}*/
		/*3.position-절대, 마진 방식*/
		/*#container {
			position: relative;
		}
		#sidemenu {
			position: absolute;
		}
		#content {
			margin-left: 30%;
		}*/
		/*4.float + position방식*/
		/*#container {
			position: relative;
			float: left;
		}
		#sidemenu {
			position: absolute;
		}
		#content {
			float: right;
		}
		#footer {
			clear: both;
		}*/
	</style>
</head>
<body>
	<div id="wrapper">
		<div id="header">header</div>
		<div id="container">
			<div id="sidemenu">sidemenu</div>
			<div id="content">content</div>
		</div>
		<div id="footer">footer</div>
	</div>
</body>
</html>
```

## 3 Layer
```html
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<style type="text/css">
		*{margin:0;padding:0;}
        li{list-style-type:none;}
		img, fieldset{border:none;}
        li img, dd img{vertical-align:top;}
		#header {
			background: #ff0;
			height: 50px;
		}
        #container{
        	width:100%;
        }
		#sidemenu {
			width: 30%;
			height: 500px;
			background: #0f0;
		}
		#content {
			width: 50%;
			height: 500px;
			background: #f00;
		}
		#banner {
			width: 20%;
			height: 500px;
			background: #00f;
		}
		#footer {
			height: 50px;
			background: #0ff;
		}

		/*1.float방식*/
		/*#container {
			float: left;
		}
		#sidemenu {
			float: left;
		}
		#content {
			float: left;
		}
		#banner {
			float: right;
		}
		#footer {
			clear: both;
		}*/
		/*2.content를 sidemenu보다 먼저 마크업 하는 float방식*/
		/*#container {
			float: left;
		}
		#w_content {
			float: left;
			width: 80%;
		}
		#content {
			float: right;
			width: 70%;
		}
		#sidemenu {
			float: left;
		}
		#banner {
			float: right;
		}
		#footer {
			clear: both;;
		}*/
		/*3.position-절대, 상대 위치*/
		/*#container {
			position: relative;
		}
		#sidemenu {
			position: absolute;
			left: 0;
			top:0;
		}
		#content {
			position: relative;
			left: 30%;
		}
		#banner {
			position: absolute;
			right: 0;
			top:0;
		}*/
		/*4. position -절대, 마진 방식*/
		/*#container {
			position: relative;
		}
		#sidemenu {
			position: absolute;
			left: 0;
			top:0;
		}
		#content {
			margin-left: 30%;
		}
		#banner {
			position: absolute;
			right: 0;
			top:0;
		}*/
		/*5.float + position방식*/
		/*#container {
			position: relative;
			float: left;
		}
		#sidemenu {
			float: left;
		}
		#content {
			position: absolute;
			left: 30%;
		}
		#banner {
			float: right;
		}
		#footer {
			clear: both;
		}*/
		
	</style>
</head>
<body>
	<div id="wrapper">
		<div id="header">header</div>
		<!-- 1.float방식 -->
		<!-- 3.position-절대, 상대 위치 -->
		<!-- 4.position -절대, 마진 방식-->
		<div id="container">
			<div id="sidemenu">sidemenu</div>
			<div id="content">content</div>
			<div id="banner">
				banner
			</div>
		</div>
		<!-- 2.content를 sidemenu보다 먼저 마크업 하는 float방식 -->
		<!-- <div id="container">
			<div id="w_content">
				<div id="content">content</div>
				<div id="sidemenu">sidemenu</div>
			</div>
			<div id="banner">
				banner
			</div>
		</div> -->
		<div id="footer">footer</div>
	</div>
</body>
</html>
```