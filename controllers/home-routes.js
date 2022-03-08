const router = require("express").Router();
const { Password, User } = require("../models/");


// !!! Change to render welcome page


// Dont need?
// get single password
router.get("/password/:id", (req, res) => {
    Password.findByPk(req.params.id, {
        include: [
            User,
          
        ],
    })
        .then((dbPasswordData) => {
            if (dbPasswordData) {
                const password = dbPasswordData.get({ plain: true });

                res.render("single-passwords", { password });
            } else {
                res.status(404).end();
            }
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }

    res.render("login");
});

router.get("/signup", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }

    res.render("signup");
});

module.exports = router;
