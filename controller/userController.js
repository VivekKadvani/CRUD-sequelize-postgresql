
// const student = require("../data/data")

const { where } = require('sequelize');
const { Users, country } = require('../models')
const homepage = (req, res) => {
    res.send("Hello World!")
}

const getUser = (req, res) => {
    Users.findByPk(req.body.userId, { include: 'country' })
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
const addCountry = (req, res) => {
    country.create({
        countryName: req.body.country,
        userId: req.body.userId
    }).then((country) => {
        res.json(country)
    }).then((error) => {
        res.json(error)
    })

}
const getCountry = async (req, res) => {
    try {
        let data = await country.findOne({ where: { countryId: await req.body.cId } })
        const foreignData = (await data.getUser()).dataValues;
        console.log(foreignData);
        data = { ...data.dataValues, foreignData }
        await res.json(data)


        // .then((country) => {
        //     res.json(country)
        // }).then((error) => {
        //     res.json(error)
        // })
    }
    catch (e) {
        res.status(400).json({ error: e })
    }
}
const deleteCountry = async (req, res) => {
    country.destroy({
        where: {
            countryId: req.body.cId
        }
    }).then((result) => {
        if (result === 1)
            res.send("Country deleted")
        elseres.sendStatus(400)
    }).catch((error) => {
        console.log(error);
        res.sendStatus(400)
    })
}
const updateUser = (req, res) => {
    Users.update(
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
    Users.destroy({ where: { id: req.body.userId } })
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
    await Users.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        address: req.body.address

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
    insertUser,
    addCountry,
    getCountry,
    deleteCountry
}