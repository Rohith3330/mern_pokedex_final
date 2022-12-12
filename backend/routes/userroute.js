const express=require('express');
const { retriveIMG,getIMG} = require('../controllers/imgcontroller');
const { registerUser, authUser, retriveUser,getuserbyid}=require('../controllers/userController');
// const {registerIMG,retriveIMG}=require("../controllers/imagecontroller")
// const {retriveImg}=require("../controllers/imgcontroller");
const{predict}=require("../controllers/predictioncontroller")
const upload=require("../middleware/upload")
const router=express.Router();
router.route('/upload').post(upload.single("img"),retriveIMG);
router.route('/down').post(getIMG);
router.route('/').post(registerUser);

router.route('/login').post(authUser);
router.route('/predict').post(predict);
router.route('/retrive').get(retriveUser);
router.route('/getuser/:id').get(getuserbyid);
// router.route('/getImage').post(registerIMG);

// router.route()


module.exports=router;