//routes for login borrowed from mini project

const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
  
    User.findOne({ where: { email: req.body.email } }).then(async (userData)=>{
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
      console.log("the user found was",userData);
      const validPassword = await userData.checkPassword(req.body.password);
      console.log(validPassword, "checking for valid password")
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
     req.session.save((err) => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        if (err){
          throw err
        }
        console.log(req.session, "right here")
        res.status(200).json({
          userData,
          message:"log in successful"
        })
      });
    });
   
    
  
  

    
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
router.post("/signup",async (req,res)=>{
try{
const userData=await User.create(req.body)
req.session.save(()=>{
  req.session.user_id=userData.id;
  req.session.name=userData
  req.session.logged_in=true
  res.status(200).json(userData)
})
}catch(err){
  res.status(400).json(err)
}
})

module.exports = router;
