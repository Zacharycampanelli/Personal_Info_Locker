const router = require("express").Router();
const { Password, Comment, User } = require("../models/");

// get all posts for homepage
router.get("/", (req, res) => {
    Password.findAll({
        include: [User],
    })
        .then((dbPasswordData) => {
            const passwords = dbPasswordData.map((password) => password.get({ plain: true }));

            res.render("all-passwords", { passwords });
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

// get single password
router.get("/password/:id", (req, res) => {
    Password.findByPk(req.params.id, {
        include: [
            User,
            {
                model: Comment,
                include: [User],
            },
        ],
    })
        .then((dbPasswordData) => {
            if (dbPasswordData) {
                const passwords = dbPasswordData.get({ plain: true });

                res.render("single-passwords", { passwords });
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
