/**
 * @file cookie spec
 * @author zfkun(zfkun@msn.com)
 */

define(function() {

    var env = require( 'saber-env' );

    describe( 'Env', function() {

        it( 'should exist.', function() {
            expect( typeof env ).toEqual( 'object' );
            expect( typeof env.os ).toEqual( 'object' );
            expect( typeof env.browser ).toEqual( 'object' );
        });

    });

});
