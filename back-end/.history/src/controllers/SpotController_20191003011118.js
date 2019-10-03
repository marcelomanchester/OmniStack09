const SpotModel = require('../models/Spots');
// const UserModel = require('../models/User');

module.exports = {
    async store(req, res) {
        console.log(req.file)
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user } = req.headers;

        // const verifyUser = await UserModel.findById(user);
        // if(!verifyUser) return res.status(400).json({msg: "User does not exists"})

        const spot = await SpotModel.create({
            user,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })

        return res.json(spot)
    }
}