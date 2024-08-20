const router = require("express").Router();
const { Post, User, Comment } = require("../../models");

// Create a new post
router.post("/", async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id, 
    });

    // Redirect to dashboard after creating post
    res.redirect("/dashboard");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to update existing post by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedPost = await Post.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id, 
      },
    });

    if (!updatedPost) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route delete post by ID
router.delete("/:id", async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Existing route get single post by ID
router.get("/:id", async (req, res) => {
  try {
    const postId = parseInt(req.params.id, 10);

    if (isNaN(postId)) {
      res.status(400).json({ message: "Invalid post ID" });
      return;
    }

    const postData = await Post.findOne({
      where: { id: postId },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    const post = postData.get({ plain: true });

    res.render("post", {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;