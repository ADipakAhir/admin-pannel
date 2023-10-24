const contect = require("../models/contectmodel");



module.exports.view_contect = async(req,res)=>{
  let contectData = await contect.find({});
  return res.render("view_contect" , {
    contectData : contectData
  });
}

module.exports.multipalcontact = async(req,res)=>{
  // console.log(req.body.delAll);
  await contect.deleteMany({'_id':{'$in':req.body.delAll}});
  return res.redirect("back");
}

