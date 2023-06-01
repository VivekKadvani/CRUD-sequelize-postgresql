const express = require('express')
const router = express.Router()
const userMiddleware = require('../middleware/route.js')
const { homepage, getUser, updateUser, deleteUser, insertUser } = require("../controller/userController")

router.get('/', homepage)

router.post('/getstudents', getUser)

router.put('/updatestudents', updateUser)

router.delete('/delstudents', deleteUser)

router.post('/student', insertUser)

module.exports = router