var express = require("express");
var router = express.Router();

const messages = [];

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", function (req, res, next) {
    res.render("form", { title: "Mini Messageboard", messages: messages });
});

router.post("/new", function (req, res, next) {
    const message = req.body;

    messages.push({
        text: message.message,
        user: message.author,
        added: new Date(),
    });

    res.redirect("/");
});

module.exports = router;
