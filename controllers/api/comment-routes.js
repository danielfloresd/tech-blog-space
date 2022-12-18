const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// GET all comments
router.get("/", async (req, res) => {
  try {
    let commentData = await Comment.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Post,
          attributes: ["title"],
        },
      ],
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single comment
router.get("/:id", async (req, res) => {
  try {
    let commentData = await Comment.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Post,
          attributes: ["title"],
        },
      ],
    });
    if (!commentData) {
      res.status(404).json({ message: "No comment found with this id" });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new comment
router.post("/", withAuth, async (req, res) => {
  try {
    let commentData = await Comment.create({
      contents: req.body.contents,
      user_id: req.session.user_id,
      post_id: req.body.post_id,
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a comment
router.delete("/:id", withAuth, async (req, res) => {
  try {
    let commentData = await Comment.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!commentData) {
      res.status(404).json({ message: "No comment found with this id" });
      return;
    }
    commentData.destroy();
    res.status(200).json({ message: "Comment deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
