const jwt = require("jsonwebtoken")
require("dotenv").config()

function auth(req, res, next) {
    const authHeader = req.headers['Authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) return res.status(401).send("Access denied. Not authorized...")

    try {
        const jwtSecretKey = process.env.JWT_SECRET
        const decoded = jwt.verify(token, jwtSecretKey)
        req.user = decoded
        next()
    } catch (error) {
        res.status(400).send("Invalid auth token...")
    }
}
module.exports = auth