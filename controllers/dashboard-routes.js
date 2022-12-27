const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

// /dashboard
router.get("/", withAuth, (req, res) => {
  console.log("Dashboard route", req.session);
  Post.findAll({
    where: {
      // use the ID from the session
      user_id: req.session.user_id,
    },
    attributes: Post.postAttributes,
    include: Post.postInclude,
    order: [["created_at", "DESC"]],
  })
    .then((dbData) => {
      //serialize the data before passing to template
      const posts = dbData.map((post) => post.get({ plain: true }));
      Comment.findAll({
        where: {
          // use the ID from the session
          user_id: req.session.user_id,
        },
        attributes: Comment.commentAttributes,
        include: [{ model: User, attributes: ["username"] }, {model: Post}],
        order: [["created_at", "DESC"]],
      }).then((dbData) => {
        const comments = dbData.map((comment) => comment.get({ plain: true }));
        res.render("dashboard", {
          posts,
          comments,
          logged_in: req.session.logged_in,
          username: req.session.username,
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/new-post", (req, res) => {
  if (req.session.logged_in) {
    // res.render('new-post', { logged_in: true} );
    res.render("new-post", {
      logged_in: req.session.logged_in,
      username: req.session.username,
    });

    return;
  } else {
    res.redirect("/");
  }
});

// /dashboard/edit/:id

router.get("/edit/:id", withAuth, (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: Post.postAttributes,
    include: Post.postInclude,
  })
    .then((dbData) => {
      if (!dbData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      const post = dbData.get({ plain: true });
      res.render("edit-post", {
        post,
        logged_in: req.session.logged_in,
        username: req.session.username,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
