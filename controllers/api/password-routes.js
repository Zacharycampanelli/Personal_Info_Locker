const router = require('express').Router();
const { Password, User, } = require('../../models');
const sequelize = require('../../config/connection');


// GET /api/passwords
router.get('/', (req, res) => {
    Password.findAll()
    .then((dbPasswordData) => res.json(dbPasswordData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

module.exports = router;