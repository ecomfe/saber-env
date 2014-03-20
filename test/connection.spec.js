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
            expect( connection.hasOwnProperty( 'bandwidth' ) ).toEqual( true );
            expect( typeof connection.bandwidth ).toEqual( 'number' );
            
            expect( connection.hasOwnProperty( 'metered' ) ).toEqual( true );
            expect( typeof connection.metered ).toEqual( 'boolean' );
            
            expect( connection.hasOwnProperty( 'type' ) ).toEqual( true );
            expect( typeof connection.type ).toEqual( 'string' );
            
            expect( connection.hasOwnProperty( 'onchange' ) ).toEqual( true );

            expect( connection.hasOwnProperty( 'addEventListener' ) ).toEqual( true );
            expect( typeof connection.addEventListener ).toEqual( 'function' );
        });

    });

});
