var cursos = [
    {
        "nome"  :   "001 - Técnico em Desenvolvimento de Sistemas",
        "sigla" :   "DS",
        "icone" :   "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
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
    let erro = true

    cursos.forEach(item => {
        listaCurso.push(item.sigla)
        erro = false
    })

    if (erro) {
        return false
    } else {
        return listaCurso
    }
}

module.exports = {
    getCurso
}