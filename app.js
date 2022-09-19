/********************************************************************
OBJETIVO: PROJETO INTEGRADO ENTRE PWBE E PWFE
AUTOR: ARTHUR PILOTO
DATA DE CRIAÇÃO: 15/09/2022
*********************************************************************/
const express = require(`express`)
const app = express()
const cors = require(`cors`)
const bodyParser = require(`body-parser`)
const { getCurso } = require(`./module/cursos.js`)
const { getAlunoPorCurso, getAlunoPorStatus, getDisciplinaPorAluno } = require(`./module/alunos.js`)

app.use((request, response, next) => {
    response.header(`Access-Control-Allow-Origin`, `*`)
    response.header(`Access-Control-Allow-Methods`, `GET, POST, PUT, DELETE, OPTIONS`)
    app.use(cors())
    next()
})

// EndPoint para filtrar os cursos
app.get(`/cursos`, cors(), async (request, response, next) => {
    let cursos = getCurso()

    if (cursos) {
        return response.status(200).json(cursos)
    }
    return response.status(404)
})

// EndPoint para filtrar os alunos pelo curso
app.get(`/alunos/`, cors(), async (request, response, next) => {
    let curso = request.query.curso
    let alunos = getAlunoPorCurso(curso)

    if (alunos) {
        return response.status(200).json(alunos)
    }
    return response.status(404)
})

// EndPoint para filtrar as disciplinas pelo aluno
app.get(`/disciplinas/aluno/:matricula`, cors(), async (request, response, next) => {
    let matricula = request.params.matricula
    let disciplinas = getDisciplinaPorAluno(matricula)

    if (disciplinas) {
        return response.status(200).json(disciplinas)
    }
    return response.status(404)
})

app.listen(8080, () => {
    console.log(`Server Waiting Requisitions`)
})