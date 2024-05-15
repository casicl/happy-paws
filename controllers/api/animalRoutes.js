const router = require('express').Router();
const { Model } = require('sequelize');
const { animals } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newAnimals = await animals.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newAnimals);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const animalsData = await animals.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        
        if (!animalsData) {
            res.status(404).json({ message: 'No animal found with this id!'});
            return;
        }
    res.status(200).json(animalsData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;