module.exports = {
    async store(req, res) {
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user } = req.headers;
        res.json({})
    }
}