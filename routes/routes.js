const express = require("express");
const router = express.Router();
const controllerMusic = require("./../controller/Music");

router.get("/", (req, res) => {
  res.status(200).json({ success: "RACINE API" });
});

router.post("/", (req, res) => {
  res.status(200).json({ success: "bounty" });
});

router.get("/music", controllerMusic.find);

router.post("/music", controllerMusic.create);

router.delete("/music/:id", controllerMusic.delete);

router.get("/music/:id", controllerMusic.findById);

router.get("/music/random", controllerMusic.random);

module.exports = router;
