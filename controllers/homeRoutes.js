const router = require("express").Router();
const  {} = require("../models");
const withAuth = require("../utils/auth");
const Animal = require("../models/animals");


router.get("/", async (req, res)=> {
    console.log("home", req.session)
    const animalData = await Animal.findAll({})
    
    const animals = animalData.map((animal)=> animal.get({plain: true}));
console.log(animals,"loginstatus",req.session.user_id)
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


router.get("/adoptme", withAuth, async (req,res) => {
    res.render("adoptme")
})
router.get("/profile", withAuth, async (req,res) => {
    const animaldata = await Animal.findAll({where: {user_id: req.session.user_id}})
    console.log("animaldata", animaldata)
    const animals = animaldata.map((animal)=>{return animal.get({plain:true})})
    console.log("animals", animals)
    res.render("profile", {animals, logged_in: req.session.logged_in})

    
})
module.exports = router;
