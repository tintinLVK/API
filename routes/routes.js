const express = require('express');
const router = express.Router();
const controllerMusic = require('./../controller/Music');
const {random} = require('./../controller/Music');
const swaggerUi = require('swagger-ui-express');

router.get("/", (req,res) => {
    res.status(200).json({success: "racine API"});
});

router.post('/', (req, res) => {
    res.status(200).json({ success: 'Bravo'});
});

router.get('/music', controllerMusic.find);
router.post('/music', controllerMusic.create);
router.get('/music/random', random);
router.get('/music/:id', controllerMusic.findById);
router.get('/api-docs',swaggerUi.serve,swaggerUi.setup(apiSpec));



module.exports = router;