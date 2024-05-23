const router = require('express').Router();
const userRoutes = require('./userRoutes');
const animalRoutes = require("./animalRoutes");
const commentRoutes = require("./commentRoutes")
router.use('/users', userRoutes);
router.use('/animals', animalRoutes);
router.use('/comment', commentRoutes);

module.exports = router;