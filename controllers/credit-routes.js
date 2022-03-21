const router = require("express").Router();
const { Post, User, Credit } = require("../models/");
const withAuth = require("../utils/auth");

// router.get("/", (req, res) => {
//     res.render("frontpage");
// });

router.get("/", withAuth, (req, res) => {
    Credit.findAll({
        where: {
            user_id: req.session.user_id
        }
    })
        .then(dbCreditData => {
            const posts = dbCreditData.map((post) => post.get({ plain: true }));

            res.render("all-credit-admin", {
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
    res.render("new-credit", {
        layout: "dashboard"
    });
});

router.get("/edit/:id", withAuth, (req, res) => {
    Credit.findByPk(req.params.id)
        .then(dbCreditData => {
            if (dbCreditData) {
                const post = dbCreditData.get({ plain: true });

                res.render("edit-credit", {
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


module.exports = router;



// const router = require('express').Router();
// const { Post, User, Credit } = require('../models');
// const withAuth = require('../utils/auth');

// router.get('/', withAuth, (req, res) => {
//   Credit.findAll({
//     where: {
//       user_id: req.session.user_id,
//     },
//   });

//   router.get('/credit2', withAuth, (req, res) => {
//       Credit.findAll({
//         attributes: [
//           'title',
//           'cardholder_name',
//           'number',
//           'expiration_date',
//           'cvv',
//           'zip_code',
//         ],
//       });
//     })
//     .then((dbCreditData) => {
//       const credits = dbCreditData.map((credit) => credit.get({ plain: true }));

//       res.render('all-credit-admin', {
//         layout: 'dashboard',
//         credits,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.redirect('login');
//     });
// });

// module.exports = router;

// router.post('/', withAuth, (req, res) => {
//   const body = req.body;
//   console.log(req.session.user_id);
//   Credit.create({
//     title: body.title,
//     cardholder_name: body.cardholder_name,
//     number: body.number,
//     expiration_date: body.expiration_date,
//     cvv: body.cvv,
//     zip_code: body.zip_code,
//     user_id: req.session.user_id,
//   })
//     .then((newCredit) => {
//       res.json(newCredit);
//     })
//     .catch((err) => {
//       res.status(500).json(err);
//     });
// });

// router.put('/:id', withAuth, (req, res) => {
//   Credit.update(req.body, {
//     individualHooks: true,
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((affectedRows) => {
//       if (affectedRows > 0) {
//         res.status(200).end();
//       } else {
//         res.status(404).end();
//       }
//     })
//     .catch((err) => {
//       res.status(500).json(err);
//     });
// });

// router.delete('/:id', withAuth, (req, res) => {
//   Credit.destroy({
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((affectedRows) => {
//       if (affectedRows > 0) {
//         res.status(200).end();
//       } else {
//         res.status(404).end();
//       }
//     })
//     .catch((err) => {
//       res.status(500).json(err);
//     });
// });

// module.exports = router;
