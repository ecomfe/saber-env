/**
 * @file 浏览器识别
 * @author zfkun[zfkun@msn.com]
 */

define(function( require ) {

    var detect = require( './detect' );

    return detect( navigator.userAgent );

});
