const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// GET all posts
router.get("/", async (req, res) => {
  try {
    let postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Comment,
          attributes: ["contents", "created_at"],
        },
      ],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single post
router.get("/:id", async (req, res) => {
  try {
    let postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Comment,
          attributes: ["contents", "created_at"],
        },
      ],
    });
    if (!postData) {
      res.status(404).json({ message: "No post found with this id" });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new post
router.post("/", withAuth, async (req, res) => {
  try {
    let postData = await Post.create({
      title: req.body.title,
      contents: req.body.contents,
      user_id: req.session.user_id,
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT an existing post
router.put("/:id", withAuth, async (req, res) => {
  try {
    let postData = await Post.update(
      {
        title: req.body.title,
        contents: req.body.contents,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!postData) {
      res.status(404).json({ message: "No post found with this id" });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE an existing post
router.delete("/:id", withAuth, async (req, res) => {
  try {
    let postData = await Post.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!postData) {
      res.status(404).json({ message: "No post found with this id" });
      return;
    }
    await postData.destroy();
    res.status(200).json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
