const User = require("../models/User");
const Work = require("../models/Work");

module.exports = {
    async index( request, response ){

        try {

            const { user_id } = request.params;
            const user = await User.findByPk( user_id, { include: { association: "work" } } );

            if( !user ){
                return response.status(400).send( { message: "Trabalhos não encontrados" } );
            }

            return response.status(200).send( user.work );
            
        } catch (error) {
            
        }

    },

    async store( request, response ) {

        try {
         
            const { user_id } = request.params;
            const { title, description, deadline } = request.body;
            const user = await User.findByPk(user_id);

            if( !user ){
                return response.status(400).send( {message: "Usuário não encontrado"} );
            }

            const work = await Work.create( { title, description, deadline, user_id} );
            return response.status(200).send( { message: "Trabalho cadastrado com sucesso", work } );

        } catch (error) {
            
        }

    },

    async update( request, response ) {

        try {

            const {id} = request.params;

            const { title, description, deadline } = request.body;

            const work = await Work.findByPk( id );

            if( !work ){
                return response.status(400).send( { message: "Trabalho não encontrado" } );
            }

            await Work.update( { title, description, deadline }, { where: { id } } );

            return response.status( 200 ).send( { message: "Trabalho atualizado com sucesso" } );
            
        } catch (error) {
            
        }


    },

    async delete( request, response ){

        try {
         
            const {id} = request.params;

            const work = await Work.findByPk( id );

            if( !work ){
                return response.status(400).send( { message: "Trabalho não encontrado" } );
            }

            await Work.destroy( { where: { id } } );

            return response.status(200).send( { message: "Trabalho deletado com sucesso" } );

        } catch (error) {
            
        }

    }
}