const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
// const withAuth = require('../../utils/auth');

// GET all users
router.get("/", async (req, res) => {
  try {
    let userData = await User.findAll({
      attributes: { exclude: ["password"] },
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single user
router.get("/:id", async (req, res) => {
  try {
    let userData = await User.findByPk(req.params.id, {
      attributes: { exclude: ["password"] },
      include: [
        {
          model: Post,
          attributes: Post.postAttributes,
        },
        {
          model: Comment,
          attributes: ["id", "contents", "created_at"],
          include: {
            model: Post,
            attributes: ["title"],
          },
        },
      ],
    });
    if (!userData) {
      res.status(404).json({ message: "No user found with this id" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new user
router.post("/", async (req, res) => {
  try {
    let userData = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.email = userData.email;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT update a user
router.put("/:id", async (req, res) => {
  try {
    let userData = await User.update(req.body, {
      individualHooks: true,
      where: {
        id: req.params.id,
      },
    });
    if (!userData[0]) {
      res.status(404).json({ message: "No user found with this id" });
      return;
    }
    let user = await User.findByPk(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a user
router.delete("/:id", async (req, res) => {
  try {
    let userData = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!userData) {
      res.status(404).json({ message: "No user found with this id" });
      return;
    }
    await userData.destroy();
    res.status(200).json({ message: "User deleted" });
  } catch (err) {
    console.log("Delete User:", err);
    res.status(500).json(err);
  }
});

// POST login
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.username = userData.username;
      req.session.logged_in = true;
      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log("Login:", err);
    res.status(400).json(err);
  }
});
// POST logout
router.post("/logout", async (req, res) => {
  try {
    if (req.session.logged_in) {
      await req.session.destroy();
      res.status(204).json({ message: "You are now logged out!" }).end();
    } else {
      res.status(404).json({ message: "No user is logged in!" }).end();
    }
  } catch (err) {
    console.log("Logout:", err);
    res.status(500).json(err);
  }
});

module.exports = router;
