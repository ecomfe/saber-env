/**
 * @file connection spec
 * @author zfkun(zfkun@msn.com)
 */

define(function() {

    var connection = require( 'saber-env/connection' );

    describe( 'connection', function() {

        it( 'should defined.', function() {
            expect( typeof connection ).toEqual( 'object' );
        });

        it( 'should return correct.', function() {
            expect( connection.hasOwnProperty( 'type' ) ).toEqual( true );
            expect( typeof connection.type ).toEqual( 'string' );
            expect(
                ',unknown,ethernet,wifi,2g,3g,4g,none,'.indexOf( ',' + connection.type + ',' ) >= 0
            ).toEqual( true );
        });

    });

});
