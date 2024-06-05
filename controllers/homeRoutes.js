const router = require("express").Router();
const  {} = require("../models");
const withAuth = require("../utils/auth");
const {Animals, User} = require("../models/");



router.get("/", async (req, res)=> {
    console.log("home", req.session)
    const animalData = await Animals.findAll({})
    
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
    res.render("addPet", {logged_in: req.session.logged_in})
    console.log("hello")
})


router.get("/adoptme", withAuth, async (req,res) => {
    const userData = await User.findOne({where: {id: req.session.user_id}})
    //if (userData) {
    const userName = userData.get({plain:true})
    console.log("adopt me", userName)
    res.render("adoptme", userName)
    //}
}
)

router.get("/profile", withAuth, async (req,res) => {
    const animaldata = await Animals.findAll({where: {user_id: req.session.user_id}})
    console.log("animaldata", animaldata)
    const animals = animaldata.map((animal)=>{return animal.get({plain:true})})
    console.log("animals", animals)
    res.render("profile", {animals, logged_in: req.session.logged_in})


})

router.get("/edit/:id", withAuth, async (req,res) => {
    try {
        const animaldata = await Animal.findByPk(req.params.id,{

        })
        const animal = animaldata.get({plain:true})
res.render("edit", {animal, logged_in: req.session.logged_in})
    } catch (error) {
        res.status(500).json(error)
    }
})
module.exports = router;