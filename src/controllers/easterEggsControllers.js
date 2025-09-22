import data from "../models/data.js";
const { easterEggs } = data;

const getAllEaster = (req, res) => {
    res.status(200).json({
        total: easterEggs.length,
        easterEggs: easterEggs
    })
}

const getEasterById = (req, res) => {
    let id = parseInt(req. params.id);

    const easter = easterEggs.find(e => e.id === id);

    if (easter) {
        res.status(200).json({
            success: true,
            easter: easter
        })
    }

    res.status(400).json({
        success: false, 
        message: "Easter Egg não encontrado"
    })

}

const createEasterEgg = (req, res) => {
    const { titulo, midia, tipo, descricao, dificuldade, descoberto, autor, verificado } = req.body;

    if(!titulo){
        return res.status(400).json({
            success: false,
            message: "O campo 'titulo' é obrigatório"
        })
    }

    if(!midia){
        return res.status(400).json({
            success: false,
            message: "O campo 'midia' é obrigatório"
        })
    }

    if(!tipo){
        return res.status(400).json({
            success: false,
            message: "O campo 'tipo' é obrigatório"
        })
    }

    if (!descricao) {
        return res.status(400).json({
            success: false,
            message: "O campo 'dificuldade' é obrigatório"
        })
    }

    if (!dificuldade) {
        return res.status(400).json({
            success: false,
            message: "O campo 'dificuldade' é obrigatório"
        })
    }
    
    if (!verificado) {
        return res.status(400).json({
            success: false,
            message: "O campo 'verificação' é obrigatório"
        })
    }

    if(descricao.length < 10) {
        return res.status(400).json({
            success: false, 
            message: "A 'descricão' deve ter pelo menos 10 caracteres"
        })
    }

    const novoEasterEgg = {
        id: easterEggs.length + 1,
        titulo, 
        midia,
        tipo, 
        descricao,
        dificuldade,
        descoberto,
        autor,
        verificado
    }

    easterEggs.push(novoEasterEgg);
    res.status(201).json({
        success: true,
        message: "Easter Egg cadastrado com sucesso",
        easter: novoEasterEgg
    })
}

const deleteEasterEgg = (req, res) => {
    let id = parseInt(req.params.id);
    const easterEggParaRemover = easterEggs.find(e => e.id === id);

    if (!easterEggParaRemover) {
        return res.status(404).json({
            success: false,
            message: 'Este easter egg nao existe'
        })
    }
    const easterEggFiltrado = easterEggs.filter(easter => easter.id !== id);
    easterEggs.splice(0, easterEggs.length, ...easterEggFiltrado);
    res.status(200).json({
        success: true,
        message: 'Easter Egg deletado com sucesso',
        easterEggRemovido: easterEggParaRemover
    })
}


export { getAllEaster, getEasterById, createEasterEgg, deleteEasterEgg };