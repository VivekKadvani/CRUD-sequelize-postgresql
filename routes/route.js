const express = require('express')
const router = express.Router()
const { validateUser } = require('../middleware/route.js')
const { homepage, getUser, updateUser, deleteUser, insertUser, addCountry, getCountry, deleteCountry } = require("../controller/userController")

router.get('/', homepage)

router.post('/getstudents', getUser)

router.put('/updatestudents', updateUser)

router.delete('/delstudents', deleteUser)

router.post('/student', validateUser, insertUser)
router.post('/country', addCountry)
router.post('/getcountry', getCountry)
router.delete('/delcountry', deleteCountry)



module.exports = router