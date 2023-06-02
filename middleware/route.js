const express = require('express')
const app = express()


const userMiddleware = (req, res, next) => {
    if (!req.body.amount) {
        res.send("please enter amount")
    }
    else {
        next()
    }
}
const validateUser = (req, res, next) => {
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let email = req.body.email
    let address = req.body.address
    regexName = /^[a-zA-Z]+$/
    regexEmail = /^.+@.+\..+$/

    //validate first name 
    if (!regexName.test(firstName))
        return res.status(400).json({ error: "invalid first name" })
    if (!regexName.test(lastName))
        return res.status(400).json({ error: "Invalid lastname" })
    if (!regexEmail.test(email))
        return res.status(400).json({ error: "invalid email" })
    if (!regexName.test(address))
        return res.status(400).json({ error: "invalid address" })

    next()
}

module.exports = {
    userMiddleware,
    validateUser
}