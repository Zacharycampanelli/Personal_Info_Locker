const router = require('express').Router();
const { Password, User } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  res.render('dashboard', { loggedIn: true });
});

router.post('/api/password', (req, res) => {
  res.render('new-password', { loggedIn: true });
});


// router.get('/', withAuth, (req, res) => {
//   Password.findAll({
//     attributes: ['id', 'email', 'username', 'password', 'website_url'],
//     include: [
//       {
//           model: User,
//           attributes: ['username']
      
//       },
//     ],
//   })
//     .then((dbPasswordData) => {
//       const passwords = dbPasswordData.map((password) =>
//         password.get({ plain: true })
//       );

//       res.render('all-passwords', {
//         passwords,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.redirect('login');
//     });
// });

router.get('/new', withAuth, (req, res) => {
  res.render('new-password', {
  });
});

router.get('/edit/:id', withAuth, (req, res) => {
  Password.findByPk(req.params.id)
    .then((dbPasswordData) => {
      if (dbPasswordData) {
        const password = dbPasswordData.get({ plain: true });

        res.render('edit-passwords', {
          password,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
