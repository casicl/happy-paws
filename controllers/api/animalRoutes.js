const router = require('express').Router();
const { User } = require('../../models');
const cloudinary = require('../../utils/cloudinary');
const upload = require('../../utils/multer');


//image user comes from front end.
router.put('/images', upload.single('imageUser'), async (req, res) => {

    try {
  
      const result = await cloudinary.uploader.upload(req.file.path)
      User.update({
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
  
  module.exports = router;