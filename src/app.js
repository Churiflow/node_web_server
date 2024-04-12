const { envs } = require('./config/env')
const { startServer } = require('./server/server')


const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

//FUNCION AGNOSTICA AUTOCONVOCADA
//AGNOSTICA PORQUE NO TIENE NOMBRE
//AUTOCONVOCADA PORQUE LA EJECUTAMOS CON LOS PARENTESIS
(async () => {
    main()
})()