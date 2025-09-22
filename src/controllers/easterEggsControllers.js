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

export { getAllEaster, getEasterById };