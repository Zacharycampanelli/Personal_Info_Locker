const router = require('express').Router();
const { Post, User } = require('../../models/');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, (req, res) => {
  Post.findAll({
    attributes: ['id', 'title', 'email', 'username', 'password', 'website_url'],
  });
});

router.post('/', withAuth, (req, res) => {
  const body = req.body;
  console.log(req.session.user_id);
  Post.create({
    title: body.title,
    email: body.email,
    username: body.username,
    password: body.password,
    website_url: body.website_url,
    user_id: req.session.user_id,
  })
    .then((newPost) => {
      res.json(newPost);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  Post.update(req.body,
    {
      // individualHooks: true,
      where: {
        id: req.params.id,
      },
    },
    {
      title: req.body.title,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      website_url: req.body.website_url,
    }
  )
    .then((dbPostData) => {
      
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
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
