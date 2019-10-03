module.exports = {
    async store(req, res) {
        console.log(req.body);
        console.log("=========")
        console.log(req.file);
        res.json({})
    }
}