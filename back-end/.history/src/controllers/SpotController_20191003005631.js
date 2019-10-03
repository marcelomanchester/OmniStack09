const SpotModel = require('../models/Spots');
const UserModel = require('../models/User');

module.exports = {
    async store(req, res) {
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user } = req.headers;

        const verifyUser = await

        const spot = await SpotModel.create({
            user,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })

        res.json({})
    }
}