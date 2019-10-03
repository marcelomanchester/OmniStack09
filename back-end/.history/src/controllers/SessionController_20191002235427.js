// index, show, store, update, destroy
const UserModel = require('../models/User');

module.exports = {
    async store(req, res) {
        const { email } = req.body;
        const user = await UserModel.create({ email });
        return res.json(user);
    }
}