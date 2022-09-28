var cursos = [
    {
        "nome"  :   "001 - Técnico em Desenvolvimento de Sistemas",
        "sigla" :   "DS",
        "icone" :   "https://cdn-icons-png.flaticon.com/512/59/59118.png",
        "carga" :   "1200",
    },
    {
        "nome"  :   "002 - Técnico em Redes de Computadores",
        "sigla" :   "RDS",
        "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
        "carga" :   "1200"
    }
];

// Retorna todos os cursos pela sigla
const getCurso = () => {
    let listaCurso = []
    let containerJSON = {}
    let erro = true

    cursos.forEach(item => {
        listaCurso.push({
            nome: item.nome,
            sigla: item.sigla,
            foto: item.icone
        })
        erro = false
    })
    containerJSON.cursos = listaCurso

    if (erro) {
        return false
    } else {
        return containerJSON
    }
}

module.exports = {
    getCurso
}