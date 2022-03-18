const router = require('express').Router();
const { Post, User, Credit } = require('../../models/');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, (req, res) => {
    Credit.findAll({
    attributes: ['title', 'cardholder_name', 'number', 'expiration_date', 'cvv', 'zip_code'],
  });
});

router.post('/', withAuth, (req, res) => {
  const body = req.body;
  console.log(req.session.user_id);
  Credit.create({
    title: body.title,
    cardholder_name: body.cardholder_name,
    number: body.number,
    expiration_date: body.expiration_date,
    cvv: body.cvv,
    zip_code: body.zip_code,
    user_id: req.session.user_id,
  })
    .then((newCredit) => {
      res.json(newCredit);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
    Credit.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((affectedRows) => {
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
    Credit.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((affectedRows) => {
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
