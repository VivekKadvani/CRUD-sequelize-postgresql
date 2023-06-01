
// const student = require("../data/data")

const { User } = require('../models')
const homepage = (req, res) => {
    res.send("Hello World!")
}

const getUser = (req, res) => {
    User.findByPk(req.body.userId)
        .then((user) => {
            if (user) {
                // console.log('User found:', user.toJSON());
                res.json(user)
            } else {
                // console.log('User not found.');
                res.sendStatus(404)
            }
        })
        .catch((error) => {
            // console.error('Error retrieving user:', error);
            res.sendStatus(404)
        });
}

const updateUser = (req, res) => {
    User.update(
        { firstName: 'master vk', address: 'guj' },
        { where: { id: req.body.userId } }
    )
        .then((result) => {
            console.log('User updated:', result[0] === 1 ? 'Success' : 'Not found');
            if (result[0] === 1)
                res.send("updated user")
            else
                res.sendStatus(400)
        })
        .catch((error) => {
            console.error('Error updating user:', error);
            res.sendStatus(400)
        });
}

const deleteUser = (req, res) => {
    User.destroy({ where: { id: req.body.userId } })
        .then((result) => {
            console.log('User deleted:', result === 1 ? 'Success' : 'Not found');
            if (result === 1)
                res.send('deleted user')
            else
                res.sendStatus(400)
        })
        .catch((error) => {
            console.error('Error deleting user:', error);
            res.sendStatus(400)
        });
}

const insertUser = async (req, res) => {
    await User.create({
        firstName: 'vivek',
        lastName: 'kadvani',
        email: 'vk@example.com',
        address: 'ahmd'

    })
        .then((user) => {
            // console.log('User created:', user.toJSON());
            res.json(user)
        })
        .catch((error) => {
            // console.error('Error creating user:', error);
            res.send("user not created")
        });

}
module.exports = {
    homepage,
    getUser,
    updateUser,
    deleteUser,
    insertUser
}