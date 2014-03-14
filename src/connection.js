/**
 * @file 网络链接信息
 * @author zfkun[zfkun@msn.com]
 */

define(function( require ) {

    var exports = {};

    var connection = navigator.connection || {};

    // old api
    // see http://www.w3.org/TR/2011/WD-netinfo-api-20110607/
    var CONNECTION_TYPE = [];
    var CONNECTION_TYPE_MAP = {};
    'unknown ethernet wifi 2g 3g 4g none'.split( ' ' ).forEach(
        function ( type, index ) {
            CONNECTION_TYPE[ index ] = CONNECTION_TYPE_MAP[ type ] = type;
        }
    );
    var _type = connection.type;
    _type = CONNECTION_TYPE[ _type ] || CONNECTION_TYPE_MAP[ _type ] || CONNECTION_TYPE[ 6 ];

    // current api
    // see http://www.w3.org/TR/netinfo-api/
    var prototype = {

        /**
         * 
         * @type {number}
         * @desc 0 ~ Infinity MB/s
         */
        bandwidth: {
            value: parseFloat( connection.bandwidth ) || 0,
            writable: false,
            configurable: false
        },

        /**
         * 
         * @type {boolean}
         */
        metered: {
            value: !!connection.metered,
            writable: false,
            configurable: false
        },

        /**
         * 
         * @type {string}
         */
        type: {
            value: _type,
            writable: false,
            configurable: false
        }

    };

    Object.defineProperties( exports, prototype );

    // TODO
    exports.onchange = function () {
    };

    // TODO
    exports.addEventListener = function ( type, fn, isCapture ) {
    };

    return exports;

});