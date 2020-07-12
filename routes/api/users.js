const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

// @route POST api/users
// @desc  Test route
//@access Public

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check(
      "password",
      "Please eneter a password with 8 or more characters"
    ).isLength({ min: 8 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("User Route");
  }
);

module.exports = router;
