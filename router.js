const express =require("express");

const router = express.Router();
const { getList, createList} = require("./cartfunction")

router.route('/createList').post(createList)
router.route('/getList/:id').get(getList)

module.exports=router;