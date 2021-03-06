const express = require("express");
const router = express.Router();
const db = require("../../models");

router.get("/", function(req, res) {
    db.Places.findAll({}).then(function (results) {
        res.json(results);
    });
});

router.get("/:place_name?", function(req, res){
    db.Places.findOne({
        where: {
            place_name: req.params.place_name
        }
    }).then((result) => {
        return res.json(result);
    })
})

router.get("/place_id/:place_id?", function(req, res){
    db.Places.findOne({
        where: {
            place_id: req.params.place_id
        }
    }).then((result) => {
        return res.json(result);
    })
})


module.exports = router;