const router = require("express").Router();
const  {} = require("../models");
const withAuth = require("../utils/auth");
const Animal = require("../models/animals");

router.get("/", async (req, res)=> {
    const animalData = await Animal.findAll({where: {user_id:null}})
    const animals = animalData.map((animal)=> animal.get({plain: true}));
console.log(animals)
res.render("homepage", {
    animals,
    logged_in: req.session.user_id 
});

})




module.exports = router;