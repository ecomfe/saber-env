/**
 * @file media spec
 * @author zfkun(zfkun@msn.com)
 */

define(function() {

    var media = require( 'saber-env/media' );

    describe( 'media', function() {

        it( 'should defined `canPlay`.', function() {
            expect( typeof media ).toEqual( 'object' );
            expect( typeof media.canPlay ).toEqual( 'function' );
        });

        it( 'should return correct.', function() {
            expect( media.canPlay() ).toEqual( false );
            expect( media.canPlay( 'saber' ) ).toEqual( false );
            // expect( media.canPlay( 'audio/mp3' ) ).toEqual( 'maybe' );
            // expect( media.canPlay( 'video/mp4' ) ).toEqual( 'maybe' );
            // expect( media.canPlay( 'audio/mp4; codecs="mp4a.40.5"' ) ).toEqual( 'probably' );
        });

    });

});
