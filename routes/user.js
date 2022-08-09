var express = require('express');
var router = express.Router();

router.get(`/get`, function(req, res){
  res.send({success: true, message:'GET route on things.'});
});
router.get(`/post`, function(req, res){
  res.send({success: true, message:'POST route on things.'});
});


module.exports = router;