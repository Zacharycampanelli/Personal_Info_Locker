const router = require("express").Router();
const { Password } = require("../models/");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
    Password.findAll({
        where: {
            id: req.session.id
        }
    })
        .then(dbPasswordData => {
            const passwords = dbPasswordData.map((password) => password.get({ plain: true }));

            res.render("all-passwords-admin", {
                layout: "dashboard",
                passwords
            });
        })
        .catch(err => {
            console.log(err);
            res.redirect("login");
        });
});

router.get("/new", withAuth, (req, res) => {
    res.render("new-password", {
        layout: "dashboard"
    });
});

router.get("/edit/:id", withAuth, (req, res) => {
    Password.findByPk(req.params.id)
        .then(dbPasswordData => {
            if (dbPasswordData) {
                const password = dbPasswordData.get({ plain: true });

                res.render("edit-passwords", {
                    layout: "dashboard",
                    password
                });
            } else {
                res.status(404).end();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;
