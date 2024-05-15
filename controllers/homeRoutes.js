const router = require("express").Router();
const  {} = require("../models");
const withAuth = require("../utils/auth");

router.get('/',withAuth, async (req, res)  => {
    try {
        consData = await User.findAll ({
            attributes: { exclude: ['password']},
            order ['name', 'ASC'],
        });

        const users= userData.map((project) => project.get({plain: true}));
})
};