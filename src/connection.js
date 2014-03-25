/**
 * @file 网络链接信息
 * @author zfkun[zfkun@msn.com]
 */

define(function( require ) {

    var exports = {};
    var _type = ( navigator.connection || {} ).type;

    // old api
    // see http://www.w3.org/TR/2011/WD-netinfo-api-20110607/
    var CONNECTION_TYPE = [];
    var CONNECTION_TYPE_MAP = {};
    'unknown ethernet wifi 2g 3g 4g none'.split( ' ' ).forEach(
        function ( type, index ) {
            CONNECTION_TYPE[ index ] = CONNECTION_TYPE_MAP[ type ] = type;
        }
    );

    exports.type = CONNECTION_TYPE[ _type ] || CONNECTION_TYPE_MAP[ _type ] || CONNECTION_TYPE[ 0 ];


    return exports;

});