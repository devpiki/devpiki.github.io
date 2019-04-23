---
layout: post
title: "Facade Pattern"
date: 2019-04-22 13:50:19 +0900
categories: [web, javascript]
tags: [javascript, pattern, facade]
comments: true
author : piki
---

- 퍼사드 패턴
	- Facade(외관) 는 "건물의 정면"을 의미
	- 퍼사드는 다른 커다란 코드 부분에 대한 간략화된 인터페이스를 제공하는 객체
	- [위키](https://ko.wikipedia.org/wiki/%ED%8D%BC%EC%82%AC%EB%93%9C_%ED%8C%A8%ED%84%B4)
- 예시 [참조소스](https://www.dofactory.com/javascript/facade-design-pattern)

```html
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>
<button onclick="run()">click</button>
<script>
var Mortgage = function(name) {
    this.name = name;
}
Mortgage.prototype = {
    applyFor: function(amount) {
        // access multiple subsystems...
        var result = "approved";
        if (!new Bank().verify(this.name, amount)) {
            result = "denied";
        } else if (!new Credit().get(this.name)) {
            result = "denied";
        } else if (!new Background().check(this.name)) {
            result = "denied";
        }
        return this.name + " has been " + result +
               " for a " + amount + " mortgage";
    }
}
var Bank = function() {
    this.verify = function(name, amount) {
        // complex logic ...
        return true;
    }
}
var Credit = function() {
    this.get = function(name) {
        // complex logic ...
        return true;
    }
}
var Background = function() {
    this.check = function(name) {
        // complex logic ...
        return true;
    }
}
function run() {
    var mortgage = new Mortgage("Joan Templeton");
    var result = mortgage.applyFor("$100,000");
 
    alert(result);
}
</script>
</body>
</html>
```

- 복잡한 서브 시스템에 접근 할 수 있는 간단한 인터페이스를 제공 하고 싶을때 사용
- 사용자가 알아야 하는 서브 시스템의 범위를 줄여줌
- 사용자가 원할 때는 서브 시스템에 직접 접근 하여 내부 클래스를 사용 할 수 있다.
- [참조](https://keichee.tistory.com/183)

