/********************************************************************
OBJETIVO: PROJETO INTEGRADO ENTRE PWBE E PWFE
AUTOR: ARTHUR PILOTO
DATA DE CRIAÇÃO: 15/09/2022
*********************************************************************/
const express = require(`express`)
const app = express()
const cors = require(`cors`)
const bodyParser = require(`body-parser`)

app.use((request, response, next) => {
    response.header(`Access-Control-Allow-Origin`, `*`)
    response.header(`Access-Control-Allow-Methods`, `GET, POST, PUT, DELETE, OPTIONS`)
    app.use(cors())
    next()
})