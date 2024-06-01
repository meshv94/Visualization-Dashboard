const dataModel = require("../model/data.model")

const getData = async (req, res) => {
    try {
        const data = await dataModel.find();
        res.status(200).send(data)
    } catch (error) {
        console.log(error);
        res.status(400).json({ err: " internal server error"})
    }
}

module.exports = {
    getData
}