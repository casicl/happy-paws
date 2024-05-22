const router = require("express").Router();
const  {} = require("../models");
const withAuth = require("../utils/auth");
const Animal = require("../models/animals");


router.get("/", async (req, res)=> {
    console.log("home", req.session)
    const animalData = await Animal.findAll({where: {user_id:null}})
    
    const animals = animalData.map((animal)=> animal.get({plain: true}));
console.log(animals)
res.render("homepage", {
    animals,
    logged_in: req.session.user_id 
});

})

router.get("/login", async (req, res) => {
    if (req.session.logged_in) {
        res.redirect("/")
    }
    res.render("login")
})

router.get("/addPet", withAuth, async (req,res) => {
    res.render("addPet")
    console.log("hello")
})
module.exports = router;