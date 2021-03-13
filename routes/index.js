const express = require('express');
const router = express.Router();
const postMongoose = require('./users')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index')
});

router.post('/create', function(req, res) {
  postMongoose.create({
    post: req.body.post
  })
  .then(function(created){
    res.redirect('/read')
  })
  .catch(function(err){
    req.send(err)
  })
});

router.get('/read', function(req, res) {
  postMongoose.find()
  .then(function(Data){
    res.render('read', {Data: Data})
  })
  .catch(function(err){
    req.send(err)
  })
});

router.get('/update/:iidd', function(req, res) {
  postMongoose.findOne({_id: req.params.iidd})
  .then(function(found){
    res.render('update',{found})
  })
});

router.post('/update/:iidd', function(req, res) {
  postMongoose.findOneAndUpdate({_id: req.params.iidd}, {post: req.body.post})
  .then(function(updated){
    res.redirect('/read')
  })
});

router.get('/delete/:iidd', function(req, res) {
  postMongoose.findOneAndDelete({_id: req.params.iidd})
  .then(function(deleted){
    res.redirect('/read')
  })
});

module.exports = router;