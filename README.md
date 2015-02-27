# Angular touchmove defaults

Provides directives to prevent or allow touchmove default behavior on touch devices for [AngularJS](https://angularjs.org/) Apps.

It`s main purpose is to prevent momentum / bounce scroll for WebApps, to give them a more native feel.

## Installation
Install via [bower](http://bower.io/) or download it.

    bower install angular-touchmove-defaults --save
    
Make sure to include it 
```html
<script src="angular-touchmove-defaults.js"></script>
```

## Usage
Add `'dp.utils.touchmoveDefaults'` as requirement to your app
```javascript
var app = angular.module('myApp', ['dp.utils.touchmoveDefaults]);
```

Prevent default touchmove on your root element to get rid of the momentum bounce
```html
<body prevent-touchmove></body
````

Allow default touchmove for elements or regions within your app. 
I.e. for native text scrolling or to get faster response i.e. when working with [FastClick](https://github.com/ftlabs/fastclick)
```html
<div allow-touchmove></div>
````

You can also conditionally allow native touchmove by specifying an expression
```html
<div allow-touchmove-if="your-expression"></div>
```