# Titanium *checkbox* widget [![Alloy](http://www-static.appcelerator.com/badges/alloy-git-badge-sq.png)](http://www.appcelerator.com)
The *checkbox* widget implements the checkbox also like as *Html* you can look my the demo [checkbox](https://github.com/lihlio/checkbox-demo) on github.

## Quick Start

### Get it [![gitTio](http://gitt.io/badge.png)](http://gitt.io/component/nl.fokkezb.infiniteScroll)
Download this repository and consult the [Alloy Documentation](http://docs.appcelerator.com/titanium/latest/#!/guide/Alloy_XML_Markup-section-35621528_AlloyXMLMarkup-ImportingWidgets) on how to install it, or simply use the [gitTio CLI](http://gitt.io/cli):

`$ gittio install com.dialike.checkbox`

### 截图

Android 示例图:
![Android](https://raw.githubusercontent.com/lihlio/checkbox-demo/master/doc/android.png)

Ios 示例图:
![Android](https://raw.githubusercontent.com/lihlio/checkbox-demo/master/doc/ios.png)

### Use it

Add the widget to your *Project*:

```xml
	
<View id="container">
  <Widget id="checkbox" src="com.dianlike.checkbox" />
</View>
	
```
	
```javascript
$.checkbox.init();
$.checkbox.value(); // will get checkbox current if checked		
```

All is ok!

