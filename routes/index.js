const router = require("express").Router();
const userRouter = require("../modules/users/user.route");

router.get("/", (req, res, next) => {
  try {
    res.json({ data: "App is working properly" });
  } catch (e) {
    next(e);
  }
});
router.use("/api/v1/users", userRouter);

module.exports = router;
