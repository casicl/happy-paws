const router = require('express').Router();
const { Model } = require('sequelize');
const { Animals } = require('../../models');
const withAuth = require('../../utils/auth');
const cloudinary = require('../../utils/cloudinary');
const upload = require('../../utils/multer');

router.post('/', async (req, res) => {
  console.log("body is ",req.body)
    try {
        const newAnimals = await Animals.create({
            ...req.body,
            user_id:req.session.user_id
            
        });

        res.status(200).json(newAnimals);
    } catch (err) {
      console.log(err)
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const animalsData = await Animals.destroy({
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


router.put('/images', upload.single('imageUser'), async (req, res) => {

  try {

    const result = await cloudinary.uploader.upload(req.file.path)
    Animals.update({
      imagename: req.file.originalname,
      animal_image: result.secure_url,
      cloudinary_id: result.public_id,
    }, {
      where: {
        id: req.session.user_id
      }
    }).then(answer => {
      res.json(answer)
    })
  } catch (err) {
    console.log(err)
  }
})
router.put("/adopt/:id", withAuth, async(req, res)=> {
try {
  const animalToAdopt = await Animals.update(
    {user_id: req.session.user_id

    }, {
      where: {id: req.params.id} })
if(!animalToAdopt){
  console.log("animal not found")
  return
}  
res.json(animalToAdopt)
}
catch(err){res.json(err)}})


router.put("/edit/:id", withAuth, async(req, res)=> {
try {
  const editAnimal = await Animals.update(
    req.body
    , {
      where: {id: req.params.id} })
if(!editAnimal){
  console.log("animal not found")
  return
}  
res.json(editAnimal)
}
catch(err){res.json(err)}})


module.exports = router;