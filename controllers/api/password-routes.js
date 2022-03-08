const router = require('express').Router();
const { Password, User } = require('../../models');
const sequelize = require('../../config/connection');


// get all passwords for homepage
// router.get("/", (req, res) => {
//   Password.findAll({
//       include: [User],
//   })
//       .then((dbPasswordData) => {
//           const passwords = dbPasswordData.map((password) => password.get({ plain: true }));

//           res.render("all-passwords", { passwords });
//       })
//       .catch((err) => {
//           res.status(500).json(err);
//       });
// });



// GET /api/password
// router.get('/', (req, res) => {
//   Password.findAll({
//     attributes: [
//       'id',
//       'email',
//       'username',
//       'password',
//       'website_url',
//       'updated_at',
//     ],
//     order: [['updated_at', 'DESC']],
//     include: [
//       {
//         model: User,
//         attributes: ['username'],
//       },
//     ],
//   })
//     .then((dbPasswordData) => res.json(dbPasswordData))
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// GET /api/password
router.get('/', (req, res) => {
  Password.findAll({
    attributes: [
      'id',
      'email',
      'username',
      'password',
      'website_url',
      'updated_at',
    ],
    order: [['updated_at', 'DESC']],
    include: [
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then((dbPasswordData) => res.json(dbPasswordData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/password/id
router.get('/:id', (req, res) => {
  Password.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      'id',
      'email',
      'username',
      'password',
      'website_url',
      'updated_at',
    ],
    include: [
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then((dbPasswordData) => {
      if (!dbPasswordData) {
        res.status(404).json({ message: 'No password found with this id' });
        return;
      }
      res.json(dbPasswordData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/password
router.post('/', (req, res) => {
  Password.create({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    website_url: req.body.website_url,
    user_id: req.session.user_id,
  })
    .then((dbPasswordData) => res.json(dbPasswordData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/password/id
router.put('/:id', (req, res) => {
  Password.update(
    {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      website_url: req.body.website_url,
      user_id: req.session.user_id,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPasswordData) => {
      if (!dbPasswordData) {
        res.status(404).json({ message: 'No password found with this id' });
        return;
      }
      res.json(dbPasswordData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/password/id
router.delete('/:id', (req, res) => {
  Password.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPasswordData) => {
      if (!dbPasswordData) {
        res.status(404).json({ message: 'No password found with this id' });
        return;
      }
      res.json(dbPasswordData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
