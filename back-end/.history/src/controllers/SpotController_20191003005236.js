module.exports = {
    async store(req, res) {
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user } = req.headers;
        const spot = await spot.create({
            user,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })

        res.json({})
    }
}