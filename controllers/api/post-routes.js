const router = require('express').Router();
const { Post, User } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, (req, res) => {
  const body = req.body;
  console.log(req.session.userId);
  Post.create({
    title: body.title,
    email: body.email,
    username: body.username,
    password: body.password,
    website_url: body.website_url,
    user_id: req.session.userId,
  })
    .then((newPost) => {
      res.json(newPost);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  Post.update(req.body, {
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
  Post.destroy({
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
