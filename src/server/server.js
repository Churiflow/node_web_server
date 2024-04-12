// const express = require('express')
import express from 'express'

// const path = require('path')
import path from 'path'

export const startServer = (options) => {
    //DESESTRUCTURAR EL PUERTO DE LAS OPCIONES SI NO BIENE NADA QUE SEA PUBLICO
    const { port, public_path = 'public' } = options
    
    const app = express()
    
    //PARA PODER USAR MIDDLEWARES SE USA LA PALABRA USE (EXPRESS)
    app.use(express.static(public_path))//CONTENIDO ESTATICO QUE PONEMOS DISPONIBLE

    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    app.listen(port, () =>{
        console.log(`Escuchando en el puerto ${port}`)
    })
}
