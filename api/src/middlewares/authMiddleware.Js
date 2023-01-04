const asyncHnadler = require('express-async-handler')
const User = require('../models/usersModel')
const Admin = require('../models/admin')
const jwt = require('jsonwebtoken')

const protect = asyncHnadler(async (req,res,next)=>{
    let token
    if (req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')
        ) {
        
        try {
            // get token from the header
            token = req.headers.authorization.split(' ')[1]
            // verify token
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            // Get the user from the token
            req.user = await User.findById(decoded.id).select('-Password')
            next()
        } catch (error) {
            res.status(401)
            throw new Error('not authorized')
        }
    }
    if (!token) {
        res.status(401)
        throw new Error('no token, no authorization')
    }
} )
const onlyAdmin = asyncHnadler(async (req,res,next)=>{
    let token
    if (req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')
        ) {
        
        try {
            // get token from the header
            token = req.headers.authorization.split(' ')[1]
            // verify token
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            // Get the user from the token
            req.admin = await Admin.findById(decoded.id).select('-Password')
            next()
        } catch (error) {
            res.status(401)
            throw new Error('error not authorized')
        }
    }
    if (!token) {
        res.status(401)
        throw new Error('yo silly, you are not authorized')
    }
} )
module.exports ={protect,onlyAdmin}