/**
 * @file 多媒体探测
 * @author zfkun[zfkun@msn.com]
 */

define(function( require ) {

    var exports = {};

    /**
     * 预创建`Audio`对象，查询频率较高时可节省点内存
     *
     * @inner
     * @type {HTMLAudioElement}
     */
    var audio = window.Audio ? new window.Audio() : null;

    /**
     * 检测是否支持指定的音频/视频类型
     *
     * @public
     * @type {string} type 要检测的音频/视频类型
     * @return {string|boolean} 检测结果
     * 不支持返回`false`,可能支持返回`maybe`，最有可能支持返回`probably`
     */
    exports.canPlay = audio
        ? function ( type ) {
            var rs = audio.canPlayType( type );
            return !rs ? false : rs;
        }
        : function () {
            return false;
        };

    return exports;

});
