/**
 * @file detect spec
 * @author zfkun(zfkun@msn.com)
 */

define(function() {

    var detect = require( 'saber-env/detect' );

    var UAS = {

        android: {
            safari: [
                [
                'Mozilla/5.0 (Linux; U; Android 2.3.7; en-us; xxx Build/xxxxx) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
                'webkit,533.1',
                'android,phone,2.3.7'
                ]
            ],

            chrome: [
                [
                'Mozilla/5.0 (Linux; Android 4.3; Nexus 10 Build/JSS15Q) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.72 Safari/537.36',
                'chrome,webkit,29.0.1547.72',
                'android,tablet,4.3'
                ]
            ],

            firefox: [
                [
                'Mozilla/5.0 (Android; Tablet; rv:13.0) Gecko/13.0 Firefox/13.0',
                'firefox,13.0',
                ''
                ]
            ],

            uc: [
                [
                'Mozilla/5.0 (Linux; U; Android 2.3.5; zh-CN; HTC Desire HD A9191 Build/GRJ90) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 UCBrowser/9.6.2.404 U3/0.8.0 Mobile Safari/533.1',
                'uc,webkit,9.6.2.404',
                'android,phone,2.3.5'
                ]
            ],

            baidu: [
                [
                'Mozilla/5.0 (Linux; U; Android 2.3.5; zh-cn; HTC Desire HD A9191 Build/GRJ90) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 baiduboxapp/5.1 (Baidu; P1 2.3.5)',
                'baidu,webkit,5.1',
                'android,phone,2.3.5'
                ],
                [
                'Mozilla/5.0 (Linux; U; Android 2.3.5; zh-cn; HTC Desire HD A9191 Build/GRJ90) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 baidubrowser/4.3.16.2 (Baidu; P1 2.3.5)',
                'baidu,webkit,4.3.16.2',
                'android,phone,2.3.5'
                ]
            ],

            qq: [
                [
                'Mozilla/5.0 (Linux; U; Android 2.3.5; zh-cn; HTC Desire HD A9191 Build/GRJ90) AppleWebKit/537.36 (KHTML, like Gecko)Version/4.0 MQQBrowser/5.0 Mobile Safari/537.36',
                'qq,webkit,5.0',
                'android,phone,2.3.5'
                ],
                [
                'Mozilla/5.0 (Linux; U; Android 4.2.1; zh-cn; MI 3 Build/JOP40D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30 V1_AND_SQ_4.6.0_8_YYB_D QQ/4.6.0.1805',
                'qq,webkit,4.6.0.1805',
                'android,phone,4.2.1'
                ]
            ],

            sogou: [
                [
                'Mozilla/5.0 (Linux; U; Android 2.3.5; zh-cn; HTC Desire HD A9191 Build/GRJ90) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30 SogouMSE,SogouMobileBrowser/2.3.0',
                'sogou,webkit,2.3.0',
                'android,phone,2.3.5'
                ]
            ],

            xiaomi: [
                [
                'Mozilla/5.0 (Linux; U; Android 4.2.1; zh-cn; MI 3 Build/JOP40D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30 XiaoMi/MiuiBrowser/1.0',
                'xiaomi,webkit,1.0',
                'android,phone,4.2.1'
                ]
            ],

            liebao: [
            ],

            mercury: [
            ]
        },

        ios: {
            // dolphin
            safari: [
                // iPhone
                [
                'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5',
                'safari,webkit,533.17.9',
                'ios,iphone,phone,4.2.1'
                ],
                [
                'Mozilla/5.0 (iPhone; CPU iPhone OS 6_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B141 Safari/8536.25',
                'safari,webkit,536.26',
                'ios,iphone,phone,6.1'
                ],
                [
                'Mozilla/5.0 (iPhone; CPU iPhone OS 7_1 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Version/7.0 Mobile/11D167 Safari/9537.53',
                'safari,webkit,537.51.2',
                'ios,iphone,phone,7.1'
                ],

                // iPod
                [
                'Mozilla/5.0 (iPod; CPU iPhone OS 6_1_5 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10B400 Safari/8536.25',
                'safari,webkit,536.26',
                'ios,ipod,6.1.5'
                ],

                // iPad
                [
                'Mozilla/5.0 (iPad; CPU OS 4_3_5 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8L1 Safari/6533.18.5',
                'safari,webkit,533.17.9',
                'ios,ipad,tablet,4.3.5'
                ],
                [
                'Mozilla/5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53',
                'safari,webkit,537.51.1',
                'ios,ipad,tablet,7.0'
                ]
            ],

            // maxthon
            chrome: [
                // iPhone
                [
                'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_5 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) CriOS/33.0.1750.15 Mobile/11B601 Safari/9537.53',
                'chrome,webkit,33.0.1750.15',
                'ios,iphone,phone,7.0.5'
                ],

                // iPod
                [
                'Mozilla/5.0 (iPod; CPU iPhone OS 6_1_5 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) CriOS/33.0.1750.15 Mobile/10B400 Safari/8536.25',
                'chrome,webkit,33.0.1750.15',
                'ios,ipod,6.1.5'
                ],

                // iPad
                [
                'Mozilla/5.0 (iPad; CPU OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) CriOS/33.0.1750.15 Mobile/11B554a Safari/9537.53',
                'chrome,webkit,33.0.1750.15',
                'ios,ipad,tablet,7.0.4'
                ]
            ],

            uc: [
                // iPhone
                [
                'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_5 like Mac OS X; zh-CN) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/11B601 UCBrowser/9.4.4.395 Mobile',
                'uc,webkit,9.4.4.395',
                'ios,iphone,phone,7.0.5'
                ],

                // iPod
                [
                'Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_5 like Mac OS X; zh-CN) AppleWebKit/536.26 (KHTML, like Gecko) Mobile/10B400 UCBrowser/9.4.4.395 Mobile',
                'uc,webkit,9.4.4.395',
                'ios,iphone,phone,6.1.5'
                ],

                // iPad
                [
                'Mozilla/5.0 (iPad; CPU OS 7 like Mac OS X; zh-CN; iPad3,1) AppleWebKit/534.46 (KHTML, like Gecko) UCBrowser/2.3.0.346 U3/1 Safari/7543.48.3',
                'uc,webkit,2.3.0.346',
                'ios,ipad,tablet,7'
                ]
            ],

            baidu: [
                // iPhone
                [
                'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_5 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/11B601 baiduboxapp/0_0.0.1.5_enohpi_6311_046/5.0.7_4C2%255enohPi/1099a/3D6163B4',
                'baidu,webkit,5.0.7',
                'ios,iphone,phone,7.0.5'
                ],

                // iPod
                [
                'Mozilla/5.0 (iPod; CPU iPhone OS 6_1_5 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/11B601 baiduboxapp/0_0.0.1.5_enohpi_069_046/5.1.6_1C2%254enohPi/1099a/E9D48ADF',
                'baidu,webkit,5.1.6',
                'ios,ipod,6.1.5'
                ],

                // iPad
                [
                'Mozilla/5.0 (iPad; CPU iPhone OS 7_0_4 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) BaiduHD/2.5.1 Mobile/10A406 Safari/8536.25',
                'baidu,webkit,2.5.1',
                'ios,ipad,7.0.4'
                ]
            ],

            qq: [
                // iPhone
                [
                'Mozilla/5.0 (iPhone 5CGLOBAL; CPU iPhone OS 7_0_5 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/6.0 MQQBrowser/5.0.5 Mobile/11B601 Safari/8536.25',
                'qq,webkit,5.0.5',
                'ios,iphone,phone,7.0.5'
                ],

                // iPod
                [
                'Mozilla/5.0 (iPod; CPU iPhone OS 6_1_5 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 MQQBrowser/5.0.5 Mobile/10B400 Safari/8536.25',
                'qq,webkit,5.0.5',
                'ios,ipod,6.1.5'
                ],

                // iPad
                [
                'Mozilla/5.0 (iPad; CPU iPhone OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/6.0 MQQBrowser/4.0.2 Mobile/11B554a Safari/7534.48.3',
                'qq,webkit,4.0.2',
                'ios,ipad,7.0.4'
                ]
            ],

            sogou: [
                // iPhone
                [
                'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_5 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/11B601 SogouMobileBrowser/2.5.1',
                'sogou,webkit,safari,2.5.1',
                'ios,iphone,phone,7.0.5'
                ],

                // iPod
                [
                'Mozilla/5.0 (iPod; CPU iPhone OS 6_1_5 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mobile/10B400 SogouMobileBrowser/2.5.1',
                'sogou,webkit,safari,2.5.1',
                'ios,ipod,6.1.5'
                ]
            ],

            liebao: [
                // iPhone
                [
                'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_5 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/11B601 Safari/7534.48.3 LBKIT',
                'liebao,webkit,0',
                'ios,iphone,phone,7.0.5'
                ],

                // iPod
                [
                'Mozilla/5.0 (iPod; CPU iPhone OS 6_1_5 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mobile/10B400 Safari/7534.48.3 LBKIT',
                'liebao,webkit,0',
                'ios,ipod,6.1.5'
                ]
            ],

            mercury: [
                // iPhone
                [
                'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Mercury/8.3 Mobile/11B554a Safari/9537.53',
                'mercury,webkit,8.3',
                'ios,iphone,phone,7.0.4'
                ],

                // iPod
                [
                'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Mercury/8.3 Mobile/11A465 Safari/9537.53',
                'mercury,webkit,8.3',
                'ios,iphone,phone,7.0'
                ],

                // iPad
                [
                'Mozilla/5.0 (iPad; CPU OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Mercury/8.3 Mobile/11B554a Safari/9537.53',
                'mercury,webkit,8.3',
                'ios,ipad,tablet,7.0.4'
                ]
            ],
        },

        kindle: {
            webkit: [
                // Kindle
                [
                'Mozilla/5.0 (Linux; U; en-US) AppleWebKit/528.5+ (KHTML, like Gecko, Safari/528.5+) Version/4.0 Kindle/3.0 (screen 600×800; rotate)',
                'webkit,528.5',
                'kindle,3.0'
                ]
            ]
        },

        blackberry: {
            webkit: [
                // blackberry
                [
                'Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en-GB) AppleWebKit/534.1+ (KHTML, like Gecko) Version/6.0.0.141 Mobile Safari/534.1+',
                'webkit,534.1',
                'blackberry,phone,6.0.0.141'
                ],

                // playbook
                [
                'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 1.0.0; en-US) AppleWebKit/534.8+ (KHTML, like Gecko) Version/0.0.1 Safari/534.8+',
                'playbook,webkit,534.8',
                'rimtabletos,tablet,1.0.0'
                ],

                // bb10
                [
                'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.1+ (KHTML, like Gecko) Version/10.0.0.1337 Mobile Safari/537.1+',
                'webkit,537.1',
                'bb10,phone,10.0.0.1337'
                ]
            ]
        },

        wp: {
            ie: [
                // IE9
                [
                'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)',
                'ie,9.0',
                ''
                ],

                // IE9 Compat
                [
                'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; Trident/5.0)',
                'ie,7.0',
                ''
                ],

                // IE10
                [
                'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)',
                'ie,10.0',
                ''
                ],

                // IE11
                [
                'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko',
                'ie,11',
                ''
                ],

                // WP8
                [
                'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; HTC; Windows Phone 8X by HTC)',
                'ie,10.0',
                'wp,phone,8.0'
                ],

                // Surface RT
                [
                'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; ARM; Trident/6.0; Touch)',
                'ie,10.0',
                ''
                ]
            ]
        }

    };

    describe( 'detect', function() {

        it( 'should defined.', function() {
            expect( typeof detect ).toEqual( 'function' );
        });

        it( 'should return correct.', function() {
            var env = detect( navigator.userAgent );
            expect( typeof env ).toEqual( 'object' );
            expect( typeof env.os ).toEqual( 'object' );
            expect( typeof env.browser ).toEqual( 'object' );
        });

        for ( var platform in UAS ) {
            for ( var browser in UAS[ platform ] ) {
                (function ( pf, bs ) {
                    it( ' should worked in ' + pf + ' for ' + bs, function() {
                        UAS[ pf ][ bs ].forEach(function ( val ) {
                            var _env = detect( val[ 0 ] );
                            var _browser = val[ 1 ].split( ',' );
                            var _os = val[ 2 ].length ? val[ 2 ].split( ',' ) : [];

                            expect( _env.browser.version ).toEqual( _browser.pop() );
                            expect(
                                _browser.every(function ( key ) {
                                    return _env.browser[ key ] === true;
                                })
                            ).toEqual( true );

                            if ( _os.length ) {
                                expect( _env.os.version ).toEqual( _os.pop() );
                                expect(
                                    _os.every(function ( key ) {
                                        return _env.os[ key ] === true;
                                    })
                                ).toEqual( true );
                            }

                        });
                    });
                })( platform, browser );
            }
        }


    });

});
