const router = require("express").Router();
const  {} = require("../models");
const withAuth = require("../utils/auth");
const Animal = require("../models/animals");

router.get("/", async (req, res)=> {
    const animals = await Animal.findAll({where: {user_id: {[Op.is]:null}}})
    
})
module.exports = router;