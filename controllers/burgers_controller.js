var express = require("express");
var router = express.Router();
var burger = require("../models/burger");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };

        res.render("index", hbsObject)
    });
});
router.post("/api/burgers", function (req, res) {
    burger.create(["burger_name", "devoured"], [req.body.name, req.body.devoured], function (result){
        res.json({
            id: result.insertId
        });
    })
})
router.put("/api/burgers/:id", function (req, res) {
    burger.update(req.body.devour, req.params.id, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
})

module.exports = router;

