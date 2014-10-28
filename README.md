# saber-env [![Build Status](https://travis-ci.org/ecomfe/saber-env.png)](https://travis-ci.org/ecomfe/saber-env)

移动端浏览器环境检测

## Installation

通过 [edp](https://github.com/ecomfe/edp) 引入模块：

```sh
edp import saber-env
```

## Usage

```javascript
require( 'saber-env', function( env ) {
    // detect os info
    console.info( env.os );

    // detect browser info
    console.info( env.browser );
});
```

### 返回值结构

```javascript
{
    os: {
        phone: true,
        tablet: false,
        ios: true,
        iphone: true,
        version: '7.0.5'
        ...
    },

    browser: {
        chrome: true,
        safari: true,
        version: '31.0'
        ...
    }
}
```
* _return_ `{Object}`
    * **os** `{Object}` 系统信息对象
    * **browser** `{Object}` 浏览器信息对象

#### os

系统信息对象，包含的可能项:

+ `version`

`通用平台类型`

+ `phone`
+ `tablet`

`特定系统类型`

+ `ios`
+ `android`
+ `wp`
+ `blackberry`
+ `bb10`
+ `rimtabletos`

`特定平台类型`

+ `iphone`
+ `ipod`
+ `ipad`
+ `touchpad`
+ `kindle`
+ `webos`


#### browser

浏览器信息对象，支持的返回值:

+ `version`

`通用类型`

+ `chrome`
+ `safari`
+ `firefox`
+ `webview`
+ `ie`
+ `silk`
+ `playbook`

`国产加壳类型`，检测值为以下列表时`version`取值为`浏览器壳`的版本号

+ `wechat`
+ `baidu`
+ `qq`
+ `uc`
+ `sogou`
+ `xiaomi`
+ `liebao`
+ `mercury`

`特殊类型`

+ `standalone` 浏览器全屏状态


## Optional Modules 可选模块

* [Object](./connection) connection模块
	* require('saber-env/connection') 
* [Object](./media) media模块
	* require('saber-env/media') 

## connection模块

* _return_ `{Object}`
    * **type** `{string}` 当前网络状态类型

可能的值为: `unknown`、`ethernet`、`wifi`、`2g`、`3g`、`4g`、`none`

**注: 当`无法检测/检测失败/其他异常`情况下默认返回`unknown`**

## media模块

### Methods

#### canPlay( type )

检测是否支持指定的`音频`或`视频`类型

* **type** `{string}` 媒体类型描述串
* _return_ `{string|boolean}`
    `不支持`时返回`false`, `可能支持`时返回`maybe`，`最有可能支持`时返回`probably`


`type` 为媒体类型描述串，可能的值为:

常用型

+ `video/ogg`
+ `video/mp4`
+ `video/webm`
+ `audio/mpeg`
+ `audio/ogg`
+ `audio/mp4`

常用值，包括编解码器

+ `video/ogg; codecs="theora, vorbis"`
+ `video/mp4; codecs="avc1.4D401E, mp4a.40.2"`
+ `video/webm; codecs="vp8.0, vorbis"`
+ `audio/ogg; codecs="vorbis"`
+ `audio/mp4; codecs="mp4a.40.5"`

**注, 如果包含编解码器，则只会返回 `probably`****注, 如果包含编解码器，则只会返回 `probably`**
