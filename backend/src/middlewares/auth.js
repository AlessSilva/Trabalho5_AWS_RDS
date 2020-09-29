const jwt = require( "jsonwebtoken" );

const authConfig = require("../config/auth.json");

module.exports = ( request, response, next ) => {

    const auth_header = request.headers.authorization;

    if ( !auth_header ){

        return response.status( 401 ).send( { error: "Nenhum token providenciado." } )

    }

    const parts = auth_header.split(" ");

    if ( !parts.length == 2 ){

        return response.status( 401 ).send( { error: "Erro no token." } )

    }

    const [ scheme, token ] = parts;

    if( !/^Bearer$/i.test(scheme) ){

        return response.status( 401 ).send( { error: "Token mal formatado." } );

    }

    jwt.verify( token, authConfig.secret, ( err, decoded ) => {

        if ( err ){

            return response.status( 401 ).send( { error: "Token inválido." } );

        }

        request.userId = decoded.id;

        console.log( decoded.id );

        return next();

    } );

}