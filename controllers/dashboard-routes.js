const router = require("express").Router();
const { Post, Credit, User } = require("../models/");
const withAuth = require("../utils/auth");

// router.get("/", (req, res) => {
//     res.render("frontpage");
// });

router.get("/", withAuth, (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        }
    })
        .then(dbPostData => {
            const posts = dbPostData.map((post) => post.get({ plain: true }));

            res.render("all-posts-admin", {
                layout: "dashboard",
                posts
            });
        })
        .catch(err => {
            console.log(err);
            res.redirect("login");
        });
});

router.get("/new", withAuth, (req, res) => {
    res.render("new-post", {
        layout: "dashboard"
    });
});

router.get("/edit/:id", withAuth, (req, res) => {
    Post.findByPk(req.params.id)
        .then(dbPostData => {
            if (dbPostData) {
                const post = dbPostData.get({ plain: true });

                res.render("edit-post", {
                    layout: "dashboard",
                    post
                });
            } else {
                res.status(404).end();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.get("/credit", withAuth, (req, res) => {
    Credit.findAll({
        where: {
            user_id: req.session.user_id
        }
    })
        .then(dbCreditData => {
            const credits = dbCreditData.map((credit) => credit.get({ plain: true }));

            res.render("all-credit-admin", {
                layout: "dashboard",
                credits
            });
        })
        .catch(err => {
            console.log(err);
            res.redirect("login");
        });
});

module.exports = router;
